import { useState, useEffect } from "react";
import axios from "axios";

const DataSiswaDashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://ppdb-t7iy.vercel.app/data-siswa")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  return (
    <div className="pt-5">
      <h2>Data siswa terdaftar</h2>
      <table className="table">
      <thead>
        <tr>
          <th>Nama lengkap</th>
          <th>Tempat lahir</th>
          <th>Tanggal lahir</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.nama_lengkap}</td>
            <td>{row.tempat_lahir}</td>
            <td>{row.tanggal_lahir}</td>
           </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DataSiswaDashboard;
