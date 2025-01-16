import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";


const app = express();

mongoose
  .connect("mongodb://nik21:Nik%401234@mongodockerwala", {
    dbName: "test",
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("not connected !", err));

app.get("/", (req, res) => {
   return  res.send("Hello World")
})

app.get("/users", async (req, res) => {

    const User = new mongoose.model("User", {
        name: String,
        email: String,
        password: String,
    });

    const user = new User({
        name: "Nik",
        email: "temp@gmail.com",
        password: "temp@1234",
    });

    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

