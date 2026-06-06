const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Contact App");
});

app.get("/show-contact", (req, res) => {
    res.send("Showing all contacts");
});

app.get("/add-contact", (req, res) => {
    res.send("Add Contact Page");
});

app.get("/update-contact", (req, res) => {
    res.send("Update Contact Page");
});

app.get("/delete-contact", (req, res) => {
    res.send("Contact Deleted Successfully");
});

app.listen(3000, () => {
    console.log("Server Started Successfully on Port 3000");
});
