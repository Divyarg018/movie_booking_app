import express from "express";

const app = express()

app.use("/", (req, res, next) => {
    res.send("Hi");
});

app.listen(5000, () => {
    console.log(`Connected To Localhost ${5000}`);
});