import express from "express";
import dotenv from "dotenv";

dotenv.config();

const server = express();
const port = process.env.PORT || 8989;

server.use(express.json());

server.listen(port, () => {
  console.log(`listening to port ${port}`);
});
