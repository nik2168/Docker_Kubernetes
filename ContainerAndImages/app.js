import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

const app = express();

app.use(cookieParser());

dotenv.config({path: ".env"});
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
   return res.json({ message: "Hello" });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


