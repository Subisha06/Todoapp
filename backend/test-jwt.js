require("dotenv").config();
const jwt = require("jsonwebtoken");

console.log("JWT_SECRET:", process.env.JWT_SECRET);

const token = jwt.sign({ id: "12345" }, process.env.JWT_SECRET, { expiresIn: "1d" });
console.log("Generated token:", token);

const decoded = jwt.verify(token, process.env.JWT_SECRET);
console.log("Decoded token:", decoded);
