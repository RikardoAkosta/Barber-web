import { Router } from "express";
import { login, register } from "../controllers/auth.controller.js";
import { body } from "express-validator";
import { validationResultExpress } from "../middlewares/validationResultExpress.js";
const router = Router();

/* estamos validando la informacion para que no llegue con espacios o la db */
router.post(
  "/register",
  [
    body("email", "Formato email incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "Contraseña mínimo 6 carácteres")
      .trim()
      .isLength({ min: 6 }),
    body("password", "formatode password incorrecto").custom(
      (value, { req }) => {
        if (value !== req.body.repassword) {
          throw new Error("No coinciden las contraseñas");
        }
        return value;
      }
    ),
  ],
  validationResultExpress,
  register
);
router.post(
  "/login",
  [
    body("email", "Formato email incorrecto").trim().isEmail().normalizeEmail(),
    body("password", "Contraseña mínimo 6 carácteres")
      .trim()
      .isLength({ min: 6 }),
  ],
  validationResultExpress,
  login
);

export default router;
