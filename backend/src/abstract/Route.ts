import { Router } from "express";

/**
 * 抽象 Route，規範路由設定需要哪些基本要素
 * 例如 url、router 以及初始化路由的 setRoutes 方法。
 */
export abstract class Route {
  protected abstract url: string;
  protected router = Router();

  public getRouter(): Router {
    return this.router;
  }

  public getUrl(): string {
    return this.url;
  }

  protected abstract setRoutes(): void;
}
