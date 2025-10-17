import express, { application } from "express";
const app = express();

import fs from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

import contactRouter from "./routes/contactRoutes.js";

import errorhandler from "./middlewares/errorhandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: true })); // URL-encoded 파싱

// 메인 페이지('/') GET
app.get("/", (req, res) => {
  console.log(`${req.method} "${req.path}" 요청 발생`);
  res.status(200);
  res.sendFile(__dirname + "/index.html");
});

// contacts 라우터
app.use("/contacts", contactRouter);

// 에러핸들러 미들웨어
app.use(errorhandler);

// server listen 관련
const port = 3000;
app.listen(port, () => {
  console.log("listening on 3000 fort");
});

// 임시
