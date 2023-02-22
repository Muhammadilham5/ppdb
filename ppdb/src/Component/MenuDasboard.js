import axios from "axios";
import { useState, useEffect } from "react";
import  people  from "../asset/icons8_people_2.ico";

const MenuDashboard = () => {
  const [jumlah1, setJumlah1] = useState([]);
  const [jumlah2, setJumlah2] = useState([]);
  const [jumlah3, setJumlah3] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/dashboard1")
      .then((response) => {
        setJumlah1(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get("http://localhost:3001/dashboard2")
      .then((response) => {
        setJumlah2(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
      axios
      .get("http://localhost:3001/dashboard3")
      .then((response) => {
        setJumlah3(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });


  return (
    <div>
        <div className="pt-5">
        <h2>Dashboard</h2>
      <div className="row">
      <div className="col-8 col-sm-10 col-md-6 col-lg-4">
          <div className="card text-bg-danger">
            <div className="p-4">
              <img src={people} alt="..."></img>
              <h3 className="text-end">{jumlah2}</h3>
              <p className="text-end">butuh verifikasi PPDB</p>
            </div>
          </div>
        </div>

        <div className="col-8 col-sm-10 col-md-6 col-lg-4">
          <div className="card text-bg-success">
            <div className="p-4">
              <img src={people} alt="..."></img>
              <h3 className="text-end">{jumlah1}</h3>
              <p className="text-end">siswa telah terdaftar</p>
            </div>
          </div>
        </div>

        <div className="col-8 col-sm-10 col-md-6 col-lg-4">
          <div className="card text-bg-primary">
            <div className="p-4">
              <img src={people} alt="..."></img>
              <h3 className="text-end">{jumlah3}</h3>
              <p className="text-end">admin</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
export default MenuDashboard;
