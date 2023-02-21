import { useState, useEffect } from "react";
import axios from "axios";

const Maindashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/ppdb")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const verifikasi = (id) => {
    axios
      .post(`http://localhost:3001/verifikasi/${id}`, { id: id })
      .then((response) => {
        if (response.data.success) {
          console.log("berhasil");
          // Remove the row from the table
          setData(data.filter((row) => row.id !== id));
          axios.delete(`http://localhost:3001/ppdb/${id}`);
        } else {
          console.log("gagal");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pt-5">
      <h2>Verifikasi PPDB</h2>
      <table className="table">
        <thead>
          <tr>
            <td></td>
            <th>Nama lengkap</th>
            <th>Tempat lahir</th>
            <th>Tanggal lahir</th>
            <th>verifikasi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id}>
              <td>{index + 1}</td>
              <td>{row.nama_lengkap}</td>
              <td>{row.tempat_lahir}</td>
              <td>{row.tanggal_lahir}</td>
              <td>
                <button
                  className="btn btn-success"
                  onClick={() => verifikasi(row.id)}
                >
                  terima
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Maindashboard;
