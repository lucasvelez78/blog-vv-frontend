import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logContext } from "../context/logContext";

function LogIn() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    confirmEmail: "",
  });

  const navigate = useNavigate();
  const { Log, setInfo } = useContext(logContext);

  function handleChange(event) {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => {
      return {
        ...prevUserInfo,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    event.preventDefault();
    if (userInfo.email === userInfo.confirmEmail) {
      Log();
      setInfo(userInfo.name, userInfo.email);
      navigate("/products");
    } else {
      alert("El email y la confirmación son diferentes, inténtalo de nuevo.");
      setUserInfo({
        name: "",
        email: "",
        confirmEmail: "",
      });
    }
  }

  return (
    <div className="registroBody">
      <div className="regContainer">
        <h1>Iniciar Sesión</h1>
        <input
          className="regInputName"
          type="text"
          name="name"
          placeholder="nombre"
          value={userInfo.name}
          onChange={handleChange}
        />
        <input
          className="regInput"
          type="e-mail"
          name="email"
          placeholder="e-mail"
          value={userInfo.email}
          onChange={handleChange}
        />
        <input
          className="regInput"
          type="e-mail"
          name="confirmEmail"
          placeholder="confirma e-mail"
          value={userInfo.confirmEmail}
          onChange={handleChange}
        />
        <button className="regBtn" onClick={handleClick}>
          Registrar
        </button>
      </div>
    </div>
  );
}

export default LogIn;
