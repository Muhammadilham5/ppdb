import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const LoginComp = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginstatus, setLoginstatus] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await axios.post("https://ppdb-t7iy.vercel.app/login", {
      username: username,
      password: password,
    });

    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      toast("Login berhasil", { type: "success" });
      setLoading(false);
    } else {
      setLoginstatus(response.data.message);
      toast("Username atau password salah", { type: "error" });
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="col-10 col-sm-8 col-md-3 m-auto">
        <div className="card border-primary bg-light p-5">
          <h3 className="text-center mb-3">Please login</h3>
          <form onSubmit={login}>
            <div className="row m-auto">
              <label className="form-label">Username</label>
              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  disabled={loading}
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
                  disabled={loading}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <div className="d-grid gap-2 col-12 m-auto pt-2">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                    onClick={login}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;
