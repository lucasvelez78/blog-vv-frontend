import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import swal from "sweetalert";

function Register() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    confirmEmail: "",
  });

  const navigate = useNavigate();

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
      console.log(userInfo);
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/registro`, userInfo)
        .then((response) => console.log(response))
        .catch((err) => {
          console.log(err);
        });
      swal("Tu registro ha sido exitoso!");
      navigate("/");
      setUserInfo({
        name: "",
        email: "",
        confirmEmail: "",
      });
    } else {
      swal(
        "El email y la confirmación del email son distintos. Inténtalo denuevo"
      );
      setUserInfo({
        name: userInfo.name,
        email: "",
        confirmEmail: "",
      });
    }
  }

  return (
    <div className="registroBody">
      <div className="regContainer">
        <h1>Hola!</h1>
        <p>Regístrate aquí para recibir nuestro boletín.</p>
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Register;
