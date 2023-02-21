const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ppdb'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Successfully connected to the database.');
});

const login = () =>{
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const SELECT_QUERY = `SELECT * FROM login WHERE username = '${username}' AND password = '${password}'`;

  connection.query(SELECT_QUERY, (results) => {
    console.log(results);
  });
};

export default connection;