import React from "react";

function Welcome({ username }) {

  const handleLogout = () => {
    localStorage.removeItem("username");
    window.location.reload();
  };

  return (

    <div className="welcome-container">

      <h1>Welcome {username}</h1>

      <p>You have successfully logged in.</p>

      <button onClick={handleLogout}>Logout</button>

    </div>

  );
}

export default Welcome;