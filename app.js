import "dotenv/config";
import express, { application } from "express";
const app = express();

import { fileURLToPath } from "url";
import path from "path";

import contactRouter from "./routes/contactRoutes.js";

import errorhandler from "./middlewares/errorhandler.js";
import { sequelize } from "./config/database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json()); // JSON 파싱
app.use(express.urlencoded({ extended: true })); // URL-encoded 파싱

// 메인 페이지('/') GET
app.get("/", (req, res) => {
  console.log(`${req.method} "${req.path}" 요청 발생`);
  res.status(200);
  res.sendFile(path.join(__dirname, "/public", "index.html"));
});

// contacts 라우터
app.use("/contacts", contactRouter);

// 정적파일
app.use(express.static("./public"));

// 에러핸들러 미들웨어
app.use(errorhandler);

// DB & server connect
try {
  await sequelize.authenticate();
  console.log("success DB connect!");
} catch (error) {
  console.error("X fail DB connect :", error.message);
  process.exit(1);
}
const port = 3000;
app.listen(port, () => {
  console.log(`********* node_study & fort ${port} *********`);
});

// 임시

const todos = [
  { a: true, b: 2 },
  { a: false, c: 4 },
  { a: false, d: 5 },
  { a: true, e: 6 },
  { a: false, f: 7 },
];

// 화살표 함수를 사용하여 reduce 콜백 로직을 한 줄로 작성
const falseCount = todos.reduce((acc, item) => {
  // item.a가 false면 acc + 1을 반환하고, 아니면 acc를 반환
  return item.a === false ? acc + 1 : acc;
}, 0); // 초기값 0

console.log("falseCount:", falseCount); // 출력: falseCount: 3
