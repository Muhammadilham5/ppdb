import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginComp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginstatus, setLoginstatus] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://ppdb-t7iy.vercel.app/register", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/login");
          toast("Berhasil mendaftar", { type: "success" });
          console.log("berhasil");
        } else {
          setLoginstatus(response.data.message);
          toast("Gagal mendaftar", { type: "error" });
          console.log("gagal");
        }
      })
      .catch((error) => {
        console.log(error);
        toast("Gagal mendaftar", { type: "error" });
        setLoginstatus("Gagal mendaftar.");
      });
  };

  return (
    <div>
      <div className="col-10 col-sm-8 col-md-3 m-auto">
        <div className="card border-primary bg-light p-5">
          <h3 className="text-center mb-3">Register</h3>
          <div className="row m-auto">
            <label className="form-label">Username</label>
            <div className="col-12">
              <input
                type="email"
                className="form-control"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="row m-auto">
            <label className="form-label">Password</label>
            <div className="col-12">
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className="d-grid gap-2 col-12 m-auto pt-2">
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={login}
                >
                  Daftar
                </button>
                <p>{loginstatus}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
