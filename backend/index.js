const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const port = 3001;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// MYSQL CONNECTION
// ENTER THIS IN QUERY IN MYSQL
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_current_password';
const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "admin123",
  database: "softeng",
});

db.connect();

// SAMPLE QUERY
// WORKING DB CONNECTION
// db.query("SELECT * FROM users", (err, res) => {
//   if (err) return console.log(err);
//   return console.log(res);
// });

// POST /USERS REQUEST
app.post("/add", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  console.log("THIS IS SERVER " + name, phone);
  const sql = "INSERT INTO users (name, phone) VALUES (?, ?)";
  db.query(sql, [name, phone], (err, result) => {
    if (err) {
      console.error("Error inserting data into MySQL:", err);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Data inserted into MySQL:", result);
      res.status(200).send("Contact added successfully");
    }
  });
});

// app.get("./sample", (req, res) => {
//   const query = "SELECT * FROM users";
//   db.query(query, (err, data) => {
//     if (err) return res.json(err);
//     return console.log(data);
//   });
// });

// GET /USERS ALL USERS
app.get("/getusers", (req, res) => {
  const query = "SELECT * FROM users";
  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// TEST SERVER CONNECTION
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
