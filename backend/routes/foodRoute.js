import express from "express";
import { Router } from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import upload from "../middleware/multer.js";

const foodRouter = Router();

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove/:id",removeFood);

export default foodRouter;