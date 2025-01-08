export class PageService {
    public getHomePagePath(): string {
        // 這裡可以使用環境變數或默認的檔案路徑
        return process.env.HomePagePath || "index.html";
    }
}
