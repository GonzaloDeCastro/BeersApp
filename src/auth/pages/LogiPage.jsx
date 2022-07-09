import { useNavigate } from "react-router-dom";

export const LogiPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/blondbeer", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
