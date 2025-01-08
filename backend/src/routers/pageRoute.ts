import { Route } from "../abstract/Route";
import { PageController } from "../controller/pageController";

export class PageRoute extends Route {
    protected url: string = "/api/v1/page";
    private pageController = new PageController();

    constructor() {
        super();
        this.setRoutes();
    }

    protected setRoutes(): void {
        this.router.get("/home", (req, res) =>
            this.pageController.getHomePage(req, res)
        );
    }
}
