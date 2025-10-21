import asyncHandler from "express-async-handler";
import Contact from "../models/Contact.js";

import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// @desc Get all contacts
// @route GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.findAll();

  //터미널 조회용(임시)
  const contactsList = contacts.map((i) => i.toJSON());
  console.log("contactsList: ", contactsList);

  const filePath = path.join(__dirname, "..", "study_node", "contacts.html");
  res.status(200).sendFile(filePath);
});

// @desc Create a contact
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).send("!!!필수값이 입력되지 않았습니다!!!");
  }
  const created = await Contact.create(req.body);
  res.status(201).json(created);
  console.log(
    `생성된 데이터: 이름(${name}), 이메일(${email}), 전화번호(${phone})`
  );
});

// @desc Get contact
// @route GET /contacts/:id
const getContact = asyncHandler(async (req, res) => {
  const name = req.params.id;
  const contact = await Contact.findOne({ where: { name: name } });
  res.status(200).json(contact);
});

// @desc Update contact
// @route PUT /contact/:id
const updateContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { name, email, phone } = req.body;
  const [updatedCount] = await Contact.update(
    { name: name, email: email, phone: phone },
    { where: { id: id } }
  );

  if (updatedCount > 0) {
    const updatedContact = await Contact.findByPk(id);
    res.status(200).json(updatedContact);
  } else {
    res.status(404).json({ message: "데이터를 찾을 수 없습니다" });
  }
});

// @desc Delete contact
// @route DELETE /contact/:id
const deleteContact = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deletedCount = await Contact.destroy({ where: { id: id } });
  if (deletedCount === 0) {
    res.status(404).send("삭제 실패");
  }
  res.status(200).json({ isDelete: true, deletedCount: deletedCount });
});

// export
export {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
