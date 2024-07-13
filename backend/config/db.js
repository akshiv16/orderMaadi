import mongoose from "mongoose";
 export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://akshivbansal9084:Akshiv%402003@cluster0.aeo2fbd.mongodb.net/tomato').then(()=>console.log("Database connected "));

}
//mongodb+srv://akshivbansal9084:<password>@cluster0.aeo2fbd.mongodb.net/?