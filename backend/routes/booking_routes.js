const express = require('express');
const { newBooking } = require('../controllers/booking_controller.js');

const bookingsRouter = express.Router();

bookingsRouter.post("/", newBooking);

module.exports = bookingsRouter;