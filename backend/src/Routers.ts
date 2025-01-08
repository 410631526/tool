import { Route } from "./abstract/Route";
import { ToolRoute } from "./routers/toolRoutes";
import { PageRoute } from "./routers/pageRoute";

/**
 * 收集所有 Route
 */
export const router: Route[] = [
  new ToolRoute(),
  new PageRoute(),
];
