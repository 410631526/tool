import { model, Schema, Document } from "mongoose";

// 如果你有自己的介面，請在這裡匯入或定義
// 例如：
export interface Tool {
  name: string;
  quantity: number;
  type: string;
  price: number;
  location: string;
}

// ToolDocument 類型定義
export interface ToolDocument extends Document, Tool {}

// 定義 Schema，第二個參數使用 { collection: "tool" }
// 或者可在 model() 第三參數指定
const toolSchema = new Schema<ToolDocument>(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
  },
  {
    // 強制使用 "tool" 做為 collection 名稱
    collection: "tool",
  }
);

// 匯出模型
// 第一個參數是模型名稱（給 mongoose 用，自己決定即可），
// 第二個參數是 schema，
// 第三個參數也能指定 collection 名，但這裡已在 schema 裡設定了。
export const toolModel = model<ToolDocument>("toolModel", toolSchema);

/*
  若你想直接在 model() 第三個參數指定，也可以：
    export const toolModel = model<ToolDocument>("toolModel", toolSchema, "tool");
  兩種作法都能保證使用 "tool" 而不被自動轉成複數 "tools"。
*/
