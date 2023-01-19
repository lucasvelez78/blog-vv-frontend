import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const product = props.title;
  const price = props.price;
  const [buy, setBuy] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    product: product,
    price: price,
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const input = evt.target;
    const copyUserInfo = { ...userInfo };
    copyUserInfo[input.name] = input.value;
    setUserInfo(copyUserInfo);
  }

  function handleClick() {
    setBuy(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    navigate("/purchased");
  }

  if (buy) {
    return (
      <div className="form-buy-div">
        <form onSubmit={handleSubmit} className="form-buy">
          <div className="form-group">
            <label htmlFor="name">
              Tu nombre
              <input
                className="form-input input-name"
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleChange}
              ></input>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Tu email
              <input
                className="form-input input-email"
                type="text"
                name="email"
                value={userInfo.email}
                onChange={handleChange}
              ></input>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="confirmEmail">
              Confirma tu email
              <input
                className="form-input input-email"
                type="text"
                name="confirmEmail"
                value={userInfo.confirmEmail}
                onChange={handleChange}
              ></input>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="price">
              Precio
              <input
                className="form-input input-email"
                type="text"
                name="price"
                defaultValue={userInfo.price}
              ></input>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="message">
              Tu producto
              <input
                className="form-input input-text"
                type="text"
                name="producto"
                defaultValue={product}
              ></input>
            </label>
          </div>
          <button className="contact-btn" type="submit">
            Comprar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="servicios">
      <div className="publicacionesHeading producto-heading">
        <h1>{props.title}</h1>
      </div>
      <div className="producto">
        <div className="servicios-container-img">
          <img src={props.img} alt="zen"></img>
        </div>
        <div className="servicios-container-content">
          <p>{props.content}</p>
          <h4>Tarifa: ${props.price}</h4>
          <button onClick={handleClick}>Comprar</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
