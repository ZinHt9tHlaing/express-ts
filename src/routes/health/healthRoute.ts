import express, { Router } from "express";
import { getHealth } from "../../controllers/healthController";

export const HealthRouter: Router = express.Router();

HealthRouter.get("/health", getHealth);
