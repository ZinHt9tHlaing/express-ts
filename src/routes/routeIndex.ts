import { Application, Router } from "express";
import { HealthRouter } from "./health/healthRoute";

const _routes: Array<[string, Router]> = [["/health", HealthRouter]];

export const routes = (app: Application) => {
  _routes.forEach((route) => {
    console.log(route[0]);
    const [url, router] = route;
    app.use(url, router);
  });
};
