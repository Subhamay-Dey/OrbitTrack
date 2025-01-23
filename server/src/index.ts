import express, {Application, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app: Application = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.get("/", (req:any, res:any) => {
    return res.json({message: "Hello World"});
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));