import React from "react";
import { useState } from "react";
import axios from "axios";

const PpdbComp = () => {
  const [nama, setNama] = useState("");
  const [tempatlahir, setTempatlahir] = useState("");
  const [tanggallahir, setTanggallahir] = useState("");
  const [namawali, setNamawali] = useState("");
  const [notelp, setNotelp] = useState("");
  const [email, setEmail] = useState("");
  const [alamat, setAlamat] = useState("");

  const form = (e) => {
    e.preventDefault();
    if (!nama || !tempatlahir || !tanggallahir || !namawali || !notelp || !email || !alamat) {
    
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
        namawali: namawali,
        notelp: notelp,
        email: email,
        alamat: alamat
      })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.message);
          setNama("");
          setTempatlahir("");
          setTanggallahir("");
          setNamawali("");
          setNotelp("");
          setEmail("");
          setAlamat("");  
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form>
        <div className="row">
          <div className="col">
        <div className="row-6 mt-5">
          <h3 className="ms-5">Data siswa</h3>
          <div className="col ms-5 mt-5">
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

          <div className="col ms-5 mt-3">
            <label className="col-sm-4 col-form-label">Tempat Tanggal Lahir</label>
            <div className="row">
            <div className="col-sm-5">
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setTempatlahir(e.target.value);
                }}
                value={tempatlahir}
              />
            </div>
            <div className="col-sm-5">
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
        </div>
        <div className="col-4 ms-5 mt-3">
          <button type="submit" className="btn btn-primary" onClick={form}>
            Kirim
          </button>
        </div>
        </div>

        <div className="col">
        <div className="row-6 mt-5">
          <h3 className="ms-5">Data wali</h3>
          <div className="col ms-5 mt-5">
            <label className="col-sm-4 col-form-label">Nama Lengkap</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setNamawali(e.target.value);
                }}
                value={namawali}
              />
            </div>
          </div>

          <div className="col ms-5 mt-3">
            <label className="col-sm-4 col-form-label">No Telp</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setNotelp(e.target.value);
                }}
                value={notelp}
              />
            </div>

            <label className="col-sm-4 col-form-label">Email</label>
            <div className="col-sm-10">
            <input
                type="email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>

            <label className="col-sm-4 col-form-label">Alamat</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  setAlamat(e.target.value);
                }}
                value={alamat}
              />
            </div>
            
          </div>
        </div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default PpdbComp;
