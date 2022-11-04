import express from "express";
const router = express.Router();

router.use("/hello", (req, res) => res.send(`Hi hello`));

export { router };
