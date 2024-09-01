import express from "express";

import {
  getUsers,
  getUserByUid,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/users/:uid", getUserByUid);
router.post("/users/", createUser);
router.patch("/users/:uid", updateUser);
router.delete("/users/:uid", deleteUser);

export default router;
