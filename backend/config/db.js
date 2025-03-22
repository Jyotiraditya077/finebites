import mongoose from "mongoose";
const MongoURI=process.env.MONGO_URL;
export const  connectDB = async () =>{

    await mongoose.connect(MongoURI).then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.