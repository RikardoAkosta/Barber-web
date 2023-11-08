import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
const router = express.Router();

router.post(
  "/register",
  [
    body("email", "Formato email incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "formatode password incorrecto")
      .trim()
      .isLength({ min: 6 }),
  ],
  register
);
router.post("/login", login);

export default router;
