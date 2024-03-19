const express = require('express');
const { getAllUsers } = require('../controllers/user_controller');

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/",);

module.exports = userRouter;