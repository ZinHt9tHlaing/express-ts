import { Application, Router } from "express";
import { HealthRouter } from "./health/healthRoute";
import { ProductRouter } from "./products/productRoute";

const _routes: Array<[string, Router]> = [
  ["/health", HealthRouter],
  ["/product", ProductRouter]
];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};
