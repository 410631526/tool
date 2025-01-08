import mongoose from "mongoose";
import { MongoInfo } from "../interfaces/MongoInfo";

export class MongoDB {
  private dbInfo: MongoInfo;

  constructor(dbInfo: MongoInfo) {
    this.dbInfo = dbInfo;
    this.connect();
  }

  public connect(): void {
    const { name, password, host, port, dbName } = this.dbInfo;
    // 移除 ?authSource=admin
    const uri = `mongodb://${name}:${password}@${host}:${port}/${dbName}`;
  
    mongoose
      .connect(uri, {
        autoIndex: true,
      } as mongoose.ConnectOptions)
      .then(() => {
        console.log("MongoDB 連線成功");
      })
      .catch((err) => {
        console.error("MongoDB 連線失敗:", err);
      });
  }
}
