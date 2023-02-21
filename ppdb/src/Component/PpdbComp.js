import React from "react";
import { useState } from "react";
import axios from "axios";

const PpdbComp = () => {
  const [nama, setNama] = useState("");
  const [tempatlahir, setTempatlahir] = useState("");
  const [tanggallahir, setTanggallahir] = useState("");

  const form = (e) => {
    e.preventDefault();
    if (!nama || !tempatlahir) {
      alert("isi data yang kosong");
      return;
    } else {
      alert("data terkirim");
    }
    axios
      .post("http://localhost:3001/ppdb", {
        nama: nama,
        tempatlahir: tempatlahir,
        tanggallahir: tanggallahir,
      })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.message);
          setNama("");
          setTempatlahir("");
          setTanggallahir("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form>
        <div className="row-6 mt-5">
          <h3 className="ms-5">Data siswa</h3>
          <div className="col-4 ms-5 mt-5">
            <label className="col-sm-4 col-form-label">Nama Lengkap</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setNama(e.target.value);
                }}
                value={nama}
              />
            </div>
          </div>

          <div className="col-4 ms-5 mt-3">
            <label className="col-sm-4 col-form-label">Tempat Lahir</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setTempatlahir(e.target.value);
                }}
                value={tempatlahir}
              />
            </div>
          </div>

          <div className="col-4 ms-5 mt-3">
            <label className="col-sm-4 col-form-label">Tanggal Lahir</label>
            <div className="col-sm-10">
              <input
                type="date"
                className="form-control"
                onChange={(e) => {
                  setTanggallahir(e.target.value);
                }}
                value={tanggallahir}
              />
            </div>
          </div>
        </div>
        <div className="col-4 ms-5 mt-3">
          <button type="submit" className="btn btn-primary" onClick={form}>
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default PpdbComp;
