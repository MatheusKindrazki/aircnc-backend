import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";

import Auth from "./middlewares/auth";

import SessionController from "./controllers/SessionController";
import SpotController from "./controllers/SpotController";
import DashboardController from "./controllers/DashboardController";
import BookingController from "./controllers/BookingController";

const routes = new Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);

routes.post("/spots", Auth, upload.single("thumbnail"), SpotController.store);
routes.get("/spots", Auth, SpotController.index);

routes.get("/dashboard", Auth, DashboardController.show);

routes.post("/spots/:spot_id/bookings", Auth, BookingController.store);

export default routes;
