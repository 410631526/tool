import express from "express";
import { router } from "./Routers";
import { logger } from "./middlewares/log";
import cors from "cors";
import { MongoDB } from "./utils/MongoDB";
require("dotenv").config();

const app: express.Application = express();
const http = require("http");
const server = http.createServer(app);

// 連接資料庫
export const DB = new MongoDB({
    name: process.env.DBUSER as string,
    password: process.env.DBPASSWORD as string,
    host: process.env.DBHOST as string,
    port: process.env.DBPORT as string,
    dbName: process.env.DBNAME as string,
});

// 中間件設置
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

// 掛載所有路由
for (const route of router) {
    console.log(`掛載路由: ${route.getUrl()}`);
    app.use(route.getUrl(), route.getRouter());
}

// 測試伺服器啟動
app.get("/", (req, res) => {
    res.send("伺服器正在運行");
});

// 啟動伺服器
server.listen(process.env.PORT, () => {
    logger.info(`伺服器正在執行，埠口：${process.env.PORT}`);
    console.log(`伺服器正在執行，埠口：${process.env.PORT}`);
});
