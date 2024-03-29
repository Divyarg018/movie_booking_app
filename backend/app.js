const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors');
const userRouter = require("./routes/user_routes.js");
const adminRouter = require('./routes/admin_routes.js');
const movieRouter = require('./routes/movie_routes.js');
const bookingsRouter = require('./routes/booking_routes.js');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.gia1v3o.mongodb.net/movie_booking?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => app.listen(5000))
    .then(() => console.log("Database is connected! Listening to localhost 5000"))
    .catch((err) => console.log(err));










