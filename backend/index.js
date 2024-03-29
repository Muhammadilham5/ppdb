const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const ACCESS_TOKEN_SECRET = "161d10de5a655878b79af055d533dc4b";

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "153.92.15.3", // or srv1153.hstgr.io
  user: "u832498606_ilham",
  password: ":530bS2!",
  database: "u832498606_ppdb",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Connected to MySQL database!");
});

connection.query(
  "CREATE TABLE IF NOT EXISTS login (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))",
  function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log("Tabel login berhasil dibuat.");
  }
);

connection.query(
  "CREATE TABLE IF NOT EXISTS pendaftaran (id INT AUTO_INCREMENT PRIMARY KEY, nama_lengkap VARCHAR(255), tempat_lahir VARCHAR(255), tanggal_lahir VARCHAR(255) , jenis_kelamin VARCHAR(255), agama VARCHAR(255), alamat VARCHAR(255), asal_sekolah VARCHAR(255), nama_ayah VARCHAR(255), nama_ibu VARCHAR(255), pekerjaan_ayah VARCHAR(255), pekerjaan_ibu VARCHAR(255), no_hp VARCHAR(255), email VARCHAR(255), status VARCHAR(255))",
  function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log("Tabel pendaftaran berhasil dibuat.");
  }
);
// tabel data_siswa
connection.query(
  "CREATE TABLE IF NOT EXISTS data_siswa (id INT AUTO_INCREMENT PRIMARY KEY, nama_lengkap VARCHAR(255), tempat_lahir VARCHAR(255), tanggal_lahir VARCHAR(255), jenis_kelamin VARCHAR(255), agama VARCHAR(255), alamat VARCHAR(255), asal_sekolah VARCHAR(255), nama_ayah VARCHAR(255), nama_ibu VARCHAR(255), pekerjaan_ayah VARCHAR(255), pekerjaan_ibu VARCHAR(255), no_hp VARCHAR(255), email VARCHAR(255), status VARCHAR(255))",
  function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
    console.log("Tabel data_siswa berhasil dibuat.");
  }
);

app.listen(4000, (err, res) => {
  console.log("Express server running on port 3001");
  if (err) {
            console.log(err)
            return res.status(500).send(err.message)
        } else {
            console.log('[INFO] Server Running on port:', port)
        }
});

app.get('/', (req, res) => {
        res.send('Express JS on Vercel')
    })

    app.get('/ping', (req, res) => {
        res.send('pong 🏓')
    })

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    "INSERT INTO login (username, password) VALUES (?, ?)",
    [username, password],
    (err, rows) => {
      if (err) throw err;
      res.json({
        success: true,
        message: "User registered successfully",
      });
    }
  );
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    connection.query(
      "SELECT * FROM login WHERE username = ? AND password = ?",
      [username, password],
      (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send({
            message:
              "An error occurred while trying to login. Please try again later.",
          });
        } else {
          if (result.length > 0) {
            const token = jwt.sign({ username: username }, ACCESS_TOKEN_SECRET);
            res.header("auth-token", token);
            res.send({
              success: true,
              message: "Login successful",
              token: token,
            });
          } else {
            res.send({ success: false, message: "Wrong username or password" });
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        "An error occurred while trying to login. Please try again later.",
    });
  }
});

//form pendaftaran
app.post("/ppdb", (req, res) => {
  const nama = req.body.nama;
  const tempatlahir = req.body.tempatlahir;
  const tanggallahir = req.body.tanggallahir;
  const namawali = req.body.namawali;
  const notelp = req.body.notelp;
  const email = req.body.email;
  const alamat = req.body.alamat;

  connection.query(
    "INSERT INTO pendaftaran (nama_lengkap, tempat_lahir, tanggal_lahir, nama_wali, no_telp, email, alamat) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [nama, tempatlahir, tanggallahir, namawali, notelp, email, alamat],
    (err, rows) => {
      if (err) throw err;
      res.json({
        success: true,
        message: "Data Berhasil ditambahkan",
      });
    }
  );
});

//main
app.get("/ppdb", (req, res) => {
  connection.query("SELECT * FROM pendaftaran", (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});

//main
app.post("/verifikasi/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "INSERT INTO data_siswa (nama_lengkap, tempat_lahir, tanggal_lahir) SELECT nama_lengkap, tempat_lahir, tanggal_lahir FROM pendaftaran WHERE id = ?",
    [id],
    (err) => {
      if (err) throw err;
      connection.query(
        "INSERT INTO data_orangtua (nama_wali, no_telp, email, alamat) SELECT nama_wali, no_telp, email, alamat FROM pendaftaran WHERE id = ?",
        [id],
        (err) => {
          if (err) throw err;
          res.json({
            success: true,
            message: "Data Berhasil dipindahkan",
          });
        }
      );
    }
  );
});


app.delete("/ppdb/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    "DELETE FROM pendaftaran WHERE id = ?",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          message:
            "An error occurred while trying to delete the row. Please try again later.",
        });
      } else {
        res.send({ success: true, message: "Row deleted successfully." });
      }
    }
  );
});

//data
app.get("/data-siswa", (req, res) => {
  connection.query("SELECT * FROM data_siswa", (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});

app.get("/data-wali", (req, res) => {
  connection.query("SELECT * FROM data_orangtua", (err, rows) => {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});

app.get("/dashboard1", (req, res) => {
  connection.query("SELECT COUNT(*) AS jumlah FROM data_siswa", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result[0].jumlah);
  });
});

app.get("/dashboard2", (req, res) => {
  connection.query("SELECT COUNT(*) AS jumlah FROM pendaftaran", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result[0].jumlah);
  });
});

app.get("/dashboard3", (req, res) => {
  connection.query("SELECT COUNT(*) AS jumlah FROM login", (err, result) => {
    if (err) throw err;
    console.log(result);
    res.json(result[0].jumlah);
  });
});

module.exports = app
