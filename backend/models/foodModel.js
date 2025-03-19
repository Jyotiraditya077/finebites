import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => {
        return /^https?:\/\/(?:[a-z\-]+\.)+[a-z]{2,}(?:\/[^\s]*)?$/i.test(v);
      },
      message: "{VALUE} is not a valid image URL",
    },
  },
  category: { type: String, required: true },
});

const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
export default foodModel;