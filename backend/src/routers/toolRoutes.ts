import { Route } from "../abstract/Route";
import { ToolController } from "../controller/toolController";

/**
 * ToolRoute: 負責 Tool 相關的路由
 */
export class ToolRoute extends Route {
  protected url: string = "/api/v1/tool";
  private toolController = new ToolController();

  constructor() {
    super();
    this.setRoutes();
  }

  protected setRoutes(): void {
    // Create
    this.router.post("/", (req, res) => this.toolController.createTool(req, res));
    // Read (all)
    this.router.get("/", (req, res) => this.toolController.getAllTools(req, res));
    // Read (by id)
    this.router.get("/:id", (req, res) => this.toolController.getToolById(req, res));
    // Update
    this.router.put("/:id", (req, res) => this.toolController.updateTool(req, res));
    // Delete
    this.router.delete("/:id", (req, res) => this.toolController.deleteTool(req, res));
  }
}
