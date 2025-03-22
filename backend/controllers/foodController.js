import foodModel from "../models/foodModel.js";
import fs from "fs";
import pkg from "cloudinary";
const { v2: cloudinary } = pkg;

// Add food item
const addFood = async (req, res) => {
  try {
    const image_filename = req.file.path; // Corrected path usage
    const imageUpload = await cloudinary.uploader.upload(image_filename, { resource_type: "image" });
    const imageUrl = imageUpload.secure_url;
console.log(imageUrl);
    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: imageUrl,
    });

    await food.save();
    res.json({ success: true, message: "Food added" });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: "Food not added", error: err.message });
  }
};

// List all food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({ success: true, data: foods });
  } catch (e) {
    console.error(e);
    res.json({ success: false, message: "Error retrieving food items", error: e.message });
  }
};

// Remove food item
const removeFood = async (req, res) => {
  try {
    const {id } = req.params;
    const food = await foodModel.findByIdAndDelete(id);



    const publicId = food.image.split('/').pop().split('.')[0]; // Extracting public ID from URL

    // Remove from Cloudinary
    await cloudinary.uploader.destroy(publicId);

    // Assuming food.image contains the local path (like 'uploads/image.jpg')
    const localFilePath = food.image; // Change this if the path needs to be constructed

    // Check if file exists before attempting to unlink
    try {
      await fs.promises.unlink(localFilePath); // Using promises for fs.unlink
    } catch (unlinkErr) {
      console.error('Error deleting local file:', unlinkErr.message);
    }

    res.json({ success: true, message: "Food successfully removed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Error removing food item", error: err.message });
  }
};


export { addFood, listFood, removeFood };