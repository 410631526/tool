import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import http from "http";

import { Route } from "./abstract/Route";
import { ToolRoute } from "./routers/toolRoutes";
import { PageRoute } from "./routers/pageRoute";
import { MongoDB } from "./utils/MongoDB";

const app = express();
const server = http.createServer(app);

// 1. 連接 MongoDB
export const DB = new MongoDB({
  name: process.env.DBUSER as string,
  password: process.env.DBPASSWORD as string,
  host: process.env.DBHOST as string,
  port: process.env.DBPORT as string,
  dbName: process.env.DBNAME as string,
});

// 2. CORS & Body Parser
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));

// 3. 掛載路由
const router: Route[] = [
  new ToolRoute(),
  new PageRoute(),
];

for (const r of router) {
  console.log(`掛載路由: ${r.getUrl()}`);
  app.use(r.getUrl(), r.getRouter());
}

// 4. 測試根路徑
app.get("/", (req, res) => {
  res.send("伺服器正在運行");
});

// 5. 啟動 Server
const PORT = process.env.PORT || 5173;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
