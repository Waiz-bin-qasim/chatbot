import { Router } from "express";
import { chatBot } from "../Controller/Message.Controller.js";

// import all controllers
// import SessionController from './app/controllers/SessionController';

const messageRoutes = new Router();

// Add messageRoutes
messageRoutes.post("/", chatBot);
// messageRoutes.get('/', SessionController.store);
// messageRoutes.put('/', SessionController.store);
// messageRoutes.delete('/', SessionController.store);

export default messageRoutes;
