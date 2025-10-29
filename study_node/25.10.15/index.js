// import user from "./std_01_a.js";
// import hello from "./std_01_b.js";
// import path from "node:path";
// import fs from "node:fs";

// hello(user);

// // path
// const fullPath = path.join("wow", "ddd", "d.js");
// console.log("fullPath :", fullPath);

// // fs
// let files = fs.readdirSync("./");
// console.log(files);

// // writeFileSync

// const data = fs.readFileSync("./study_node/25.10.15/example.txt", "utf8");
// console.log("data :", data);

// http
const reset = "\x1b[0m"; // 색상 초기화 (매우 중요)
const red = "\x1b[31m"; // 빨간색
const bold = "\x1b[1m"; // 굵게
import http from "node:http";

const server = http.createServer((req, res) => {
  console.log("요청 발생!", req.method);

  res.setHeader("Content-Type", "text/plain");
  res.write("hello world!!");
  res.end();
});

server.listen(3000, () => {
  console.log(red + bold + "ready to 3000 port" + reset);
});
