import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";

import SessionController from "./controllers/SessionController";
import SpotController from "./controllers/SpotController";
import DashboardController from "./controllers/DashboardController";

const routes = new Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.get("/spots", SpotController.index);

routes.get("/dashboard", DashboardController.show);

export default routes;
