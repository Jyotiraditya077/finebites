import pkg from "cloudinary";
const { v2: cloudinary } = pkg;

const connectCloudinary = async () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        });
        console.log("Cloudinary configured successfully");
    } catch (error) {
        console.error("Error configuring Cloudinary:", error);
    }
};

export default connectCloudinary;