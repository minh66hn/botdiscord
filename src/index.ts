import { config } from "dotenv";
config();

import express from "express";
import bot from "./bot";
import {servers} from "./data/server";

const port = process.env.PORT || 3000;
const server = express();

server.disable('x-powered-by');
server.use(express.static(`${__dirname}/../web/build`));

server.get("/*", (_req, res) => {
  res.sendFile(`${__dirname}/../web/build/index.html`);
});
servers
server.listen(port, () => {
  bot();
  console.log(`🚀 Server is running on port ${port} ✨`);
});
