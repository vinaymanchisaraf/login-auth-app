import React, { useState } from "react";
import { loginUser } from "../api";

function Login({ onLogin }) {

  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try{

      const data = await loginUser(username,password);

      if(data.success){
        localStorage.setItem("username",username);
        onLogin(username);
      }

    }catch{
      setError("Invalid username or password");
    }
  };

  return (

    <div className="login-container">

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <div className="input-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>

        {error && <p className="error">{error}</p>}

      </form>

    </div>
  );
}

export default Login;