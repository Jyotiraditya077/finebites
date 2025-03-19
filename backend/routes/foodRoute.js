import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodController.js';
import multer from 'multer';
import cloudinary from '../cloudinary.js';

const foodRouter = express.Router();

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

const cloudinaryUpload = async (req, res, next) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    req.body.image = result.secure_url;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error uploading image' });
  }
};

foodRouter.get("/list", listFood);
foodRouter.post("/add", upload.single('image'), cloudinaryUpload, addFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;