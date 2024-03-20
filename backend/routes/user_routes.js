const express = require('express');
const { getAllUsers, singup, updateUser } = require('../controllers/user_controller');

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/signup", singup);
userRouter.put("/:id", updateUser);

module.exports = userRouter;