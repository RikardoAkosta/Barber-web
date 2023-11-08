import { validationResult } from "express-validator"
export const register = (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
  }
  console.log(req.body);
  res.json({ ok: "login" });
};

export const login = (req, res) => {
  res.json({ ok: true });
};

