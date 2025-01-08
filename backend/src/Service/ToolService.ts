import { toolModel } from "../orm/schemas/toolSchemas";
import { Tool } from "../interfaces/tool";

/**
 * ToolService 負責處理對 Tool Model 的所有 CRUD 操作
 */
export class ToolService {
  /**
   * 新增工具
   */
  public async createTool(data: Tool) {
    try {
      const newTool = await toolModel.create(data);
      return { message: "新增工具成功", tool: newTool };
    } catch (error) {
      console.error("Error in createTool:", error);
      throw new Error("無法新增工具");
    }
  }

  /**
   * 取得全部工具
   */
  public async getAllTools() {
    try {
      const tools = await toolModel.find({});
      return { message: "取得工具清單成功", tools };
    } catch (error) {
      console.error("Error in getAllTools:", error);
      throw new Error("無法取得工具清單");
    }
  }

  /**
   * 以 ID 取得單筆工具
   */
  public async getToolById(id: string) {
    try {
      const tool = await toolModel.findById(id);
      return tool;
    } catch (error) {
      console.error("Error in getToolById:", error);
      throw new Error("無法取得此工具");
    }
  }

  /**
   * 更新工具
   */
  public async updateTool(id: string, data: Partial<Tool>) {
    try {
      const updatedTool = await toolModel.findByIdAndUpdate(id, data, {
        new: true,
      });
      return updatedTool;
    } catch (error) {
      console.error("Error in updateTool:", error);
      throw new Error("無法更新此工具");
    }
  }

  /**
   * 刪除工具
   */
  public async deleteTool(id: string) {
    try {
      const deleted = await toolModel.findByIdAndDelete(id);
      return deleted;
    } catch (error) {
      console.error("Error in deleteTool:", error);
      throw new Error("無法刪除此工具");
    }
  }
}
