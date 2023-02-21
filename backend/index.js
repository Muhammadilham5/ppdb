const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ppdb'
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL database!');
});

app.listen(3001, () => {
  console.log('Express server running on port 3001');
});



app.post('/login', (req, res)=> {
  const username = req.body.username;
  const password = req.body.password;
  
  connection.query("SELECT * FROM login WHERE username = ? AND password = ?",[username, password],
  (err,result)=> {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'An error occurred while trying to login. Please try again later.' });
    } else {
      if (result.length > 0) {
        res.send({ success: true });
      } else {
        res.send({ success: false, message: 'Wrong username or password' });
      }
    }
  })
});

//form pendaftaran
app.post("/ppdb", (req, res)=> {
  const nama = req.body.nama;
  const tempatlahir = req.body.tempatlahir;
  const tanggallahir = req.body.tanggallahir;


  connection.query("INSERT INTO pendaftaran (nama_lengkap, tempat_lahir, tanggal_lahir) VALUES (?, ?, ?)",[nama, tempatlahir, tanggallahir],
    (err, rows)=> {
      if (err) throw err;
      res.json({
        success: true,
        message: "Data Berhasil ditambahkan"
      });
    }
  );
});

//main
app.get("/ppdb", (req, res)=> {
  connection.query("SELECT * FROM pendaftaran",
  (err, rows)=> {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});

//main
app.post("/verifikasi/:id", (req, res)=> {
  const id = req.params.id;
  connection.query("INSERT INTO data_siswa (nama_lengkap, tempat_lahir, tanggal_lahir) SELECT nama_lengkap, tempat_lahir, tanggal_lahir FROM pendaftaran WHERE id = ?",[id],
    (err)=> {
      if (err) throw err;
      res.json({
        success: true,
        message: "Data Berhasil dipindahkan"
      });
    }
  );
});

app.delete('/ppdb/:id', (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM pendaftaran WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: 'An error occurred while trying to delete the row. Please try again later.' });
    } else {
      res.send({ success: true, message: 'Row deleted successfully.' });
    }
  });
});





//data
app.get("/data-siswa", (req, res)=> {
  connection.query("SELECT * FROM data_siswa",
  (err, rows)=> {
    if (err) throw err;
    console.log(rows);
    res.json(rows);
  });
});