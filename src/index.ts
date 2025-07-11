import express, { Application} from "express";
import dotenv from "dotenv";
import { routes } from "./routes/routeIndex";
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8000;

// dynamic routes
routes(app);

app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}`);
});
