import { useState, useEffect } from "react";
import axios from "axios";

const DataOrtuDashboard = () => {
  const [datawali, setDataWali] = useState([]);
  const [datasiswa, setDataSiswa] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/data-wali")
      .then((response) => {
        setDataWali(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:3001/data-siswa")
      .then((response) => {
        setDataSiswa(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  , []);
  

  return (
    <div className="pt-5">
      <h2>Data wali</h2>
      <table className="table">
      <thead>
        <tr>
          <th>Nama anak</th>  
          <th>Nama wali</th>
          <th>No Telp</th>
          <th>Email</th>
          <th>Alamat</th>
        </tr>
      </thead>
      <tbody>
            {datasiswa.map((row, index) => (
            <tr key={index}>
              <td>{row.nama_lengkap}</td>
              <td>{datawali[index]?.nama_wali}</td>
              <td>{datawali[index]?.no_telp}</td>
              <td>{datawali[index]?.email}</td>
              <td>{datawali[index]?.alamat}</td>
            </tr>
          ))}
      </tbody>
    </table>
    </div>
  );
};

export default DataOrtuDashboard;
