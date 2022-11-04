const express = require("express");
const contactsRouter = require("./app/routes/contact.route");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

module.exports = app;