/**
 * 定義資料庫回傳結構
 * _id 可能是 MongoDB ObjectId，用 string 來表示
 * body 存放具體的資料
 */
export interface DBResp<T> {
    _id: string;
    body: T;
}
