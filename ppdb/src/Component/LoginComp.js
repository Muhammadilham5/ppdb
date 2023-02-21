import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginComp = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginstatus, setLoginstatus] = useState('');
  const navigate = useNavigate();

  const login = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/login",{
    username: username,
    password: password,
  }).then((response)=> {
    if (response.data.success){
      navigate("/dashboard");
      console.log("berhasil");
    }else{
      setLoginstatus(response.data.message);
      console.log("gagal");
    }
  }).catch((error) => {
      console.log(error);
      setLoginstatus("An error occurred while trying to login. Please try again later.");
    });
  }
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('http://localhost:3001/login', { 
  //     username: username, 
  //     password: password })
  //     .then((res) => {
  //       if (res.data.success) {
  //         window.location.href = '/dashboard';
  //       } else {
  //         setError(res.data.message);
  //       }
  //     })
  //     .catch((error) => {
  //       setError('An error occurred while trying to login. Please try again later.');
  //     });
  //   };


  return (
    <div >
       
      <div className="col-10 col-sm-8 col-md-3 m-auto">
        <div className="card border-primary bg-light p-5">
          <h3 className="text-center mb-3">Please login</h3>
          <div className="row m-auto">
            <label className="form-label">Username</label>
            <div className="col-12">
              <input type="email" className="form-control" onChange={(e) => {setUsername(e.target.value)}} />
            </div>
          </div>

          <div className="row m-auto">
            <label className="form-label">Password</label>
            <div className="col-12">
              <input type="password" className="form-control" onChange={(e) => {setPassword(e.target.value)}} />
              <div className="d-grid gap-2 col-12 m-auto pt-2">
                <button className="btn btn-primary" type="submit" onClick={login}>
                  Login 
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
