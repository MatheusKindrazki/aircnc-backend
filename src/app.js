import "dotenv/config";

import path from "path";
import express from "express";
import routes from "./routes";
import cors from "cors";

import SocketIo from "./middlewares/socketConnection";

import socketio from "socket.io";
import http from "http";

import "./database";

class App {
  constructor() {
    this.app = express();
    this.server = http.Server(this.app);
    this.io = socketio(this.server);

    this.socketApp();
    this.middlewares();
    this.routes();
  }

  socketApp() {
    this.io.on("connection", SocketIo.connect);
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(
      "/images",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().server;
