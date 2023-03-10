import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

function ContactForm() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [confirmationEmail, setConfirmationEmail] = useState("");

  const navigate = useNavigate();

  function handleChange(evt) {
    const input = evt.target;
    const copyUserInfo = { ...userInfo };
    copyUserInfo[input.name] = input.value;
    setUserInfo(copyUserInfo);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (userInfo.email === confirmationEmail) {
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/contact`, userInfo)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
      swal("Tu mensaje ha sido enviado");
      navigate("/");
    } else {
      swal(
        "El email y la confirmación del email son distintos. Inténtalo denuevo"
      );
    }
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Tu nombre
            <input
              className="form-input"
              type="text"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label form-content">
            Tu email
            <input
              className="form-input"
              type="text"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label
            htmlFor="confirmationEmail"
            className="form-label form-content"
          >
            Confirma tu email
            <input
              className="form-input"
              type="text"
              name="confirmationEmail"
              value={confirmationEmail}
              onChange={(e) => setConfirmationEmail(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label form-content">
            Tu mensaje
            <textarea
              className="form-input"
              type="text"
              name="message"
              value={userInfo.message}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <button className="contact-btn" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
