const express = require('express');
const { getAllUsers, singup, updateUser, deleteUser } = require('../controllers/user_controller');

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", singup);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = userRouter;