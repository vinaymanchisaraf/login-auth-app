import React, { useState } from "react";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {

  const [user, setUser] = useState(localStorage.getItem("username"));

  const handleLogin = (username) => {
    setUser(username);
  };

  return (
    <div>

      {user ? (
        <Welcome username={user} />
      ) : (
        <Login onLogin={handleLogin} />
      )}

    </div>
  );
}

export default App;