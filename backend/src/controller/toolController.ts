import { Request, Response } from "express";
import { ToolService } from "../Service/ToolService";

/**
 * ToolController 負責處理工具 (Tool) 相關的請求
 */
export class ToolController {
  private service: ToolService;

  constructor() {
    this.service = new ToolService();
  }

  /**
   * 新增工具
   */
  public async createTool(req: Request, res: Response) {
    try {
      const result = await this.service.createTool(req.body);
      return res.status(200).send(result);
    } catch (error: any) {
      console.error("Error in createTool:", error);
      return res.status(500).send({ message: error.message || "伺服器錯誤" });
    }
  }

  /**
   * 取得所有工具
   */
  public async getAllTools(req: Request, res: Response) {
    try {
      const result = await this.service.getAllTools();
      return res.status(200).send(result);
    } catch (error: any) {
      console.error("Error in getAllTools:", error);
      return res.status(500).send({ message: error.message || "伺服器錯誤" });
    }
  }

  /**
   * 以 ID 取得單筆工具
   */
  public async getToolById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await this.service.getToolById(id);
      if (!result) {
        return res.status(404).send({ message: "找不到此工具" });
      }
      return res.status(200).send(result);
    } catch (error: any) {
      console.error("Error in getToolById:", error);
      return res.status(500).send({ message: error.message || "伺服器錯誤" });
    }
  }

  /**
   * 更新工具
   */
  public async updateTool(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await this.service.updateTool(id, req.body);
      if (!result) {
        return res.status(404).send({ message: "更新失敗，找不到此工具" });
      }
      return res.status(200).send(result);
    } catch (error: any) {
      console.error("Error in updateTool:", error);
      return res.status(500).send({ message: error.message || "伺服器錯誤" });
    }
  }

  /**
   * 刪除工具
   */
  public async deleteTool(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await this.service.deleteTool(id);
      if (!result) {
        return res.status(404).send({ message: "刪除失敗，找不到此工具" });
      }
      return res.status(200).send({ message: "刪除成功" });
    } catch (error: any) {
      console.error("Error in deleteTool:", error);
      return res.status(500).send({ message: error.message || "伺服器錯誤" });
    }
  }
}
