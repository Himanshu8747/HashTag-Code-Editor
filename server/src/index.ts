import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnect } from "./lib/dbConnect";
import { compilerRouter } from "./routes/compilerRouter";
const app = express();

app.use(express.json());
app.use(cors({
  origin:["https://deploy-mern-1whq.vercel.app"],
  methods:["POST","GET"],
  credentials:true
}));
config();

app.use("/compiler", compilerRouter);

dbConnect();
app.listen(4000, () => {
  console.log("http://localhost:4000");
});
