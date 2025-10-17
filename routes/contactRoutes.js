import express from "express";
const router = express.Router();
import { fileURLToPath } from "url";
import { dirname, join } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

router
  .route("/")
  .get((req, res) => {
    console.log(`${req.method} "${req.path}" 요청 발생`);
    res
      .status(200)
      .sendFile(join(__dirname, "..", "study_node", "contacts.html"));
  })
  .post((req, res) => {
    console.log(`${req.method} "${req.path}" 요청 발생`);
    console.log("req.body : ", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
      return res.status(400).send("필수값이 입력되지 않았습니다!");
    }
    res.status(201).send("created contents~");
  });

router
  .route("/:id")
  .get((req, res) => {
    console.log(`${req.method} "${req.path}" 요청 발생`);
  })
  .post((req, res) => {
    console.log(`${req.method} "${req.path}" 요청 발생`);
  })
  .delete((req, res) => {
    console.log(`${req.method} "${req.path}" 요청 발생`);
  });

export default router;
