import { where } from "sequelize";
import User from "../Models/UserModel.js";
import crypto from "crypto";

const generateUID = () => {
  return crypto.randomBytes(8).toString("hex");
};

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console, log(error.message);
  }
};

export const getUserByUid = async (req, res) => {
  try {
    const response = await User.findOne({
      where: { uid: req.params.uid },
    });
    res.status(200).json(response);
  } catch (error) {
    console, log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    req.body.uid = generateUID();
    await User.create(req.body);
    res.status(201).json("User Created");
  } catch (error) {
    console, log(error.message);
    res.status(500).json("Server Error");
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        uid: req.params.uid,
      },
    });
    res.status(201).json("User Updated");
  } catch (error) {
    console, log(error.message);
    res.status(500).json("Server Error");
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        uid: req.params.uid,
      },
    });
    res.status(201).json("User Deleted");
  } catch (error) {
    console, log(error.message);
    res.status(500).json("Server Error");
  }
};
