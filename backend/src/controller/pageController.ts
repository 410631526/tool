import { Request, Response } from "express";
import { PageService } from "../Service/PageService";

export class PageController {
    private service: PageService;

    constructor() {
        this.service = new PageService();
    }

    public getHomePage(req: Request, res: Response) {
        try {
            const pagePath = this.service.getHomePagePath();
            res.sendFile(pagePath);
        } catch (error) {
            console.error("Error in getHomePage:", error);
            res.status(500).send({ message: "無法加載頁面" });
        }
    }
}
