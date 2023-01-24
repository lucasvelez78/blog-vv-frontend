import { useState, useContext } from "react";
import { logContext } from "../context/logContext";
import axios from "axios";

function Product(props) {
  const product = props.title;
  const price = props.price;
  const { log, user } = useContext(logContext);
  const [buy, setBuy] = useState(false);
  const [userInfo] = useState({
    name: user.name,
    email: user.email,
    product: product,
    price: price,
  });

  const mercadopago = new MercadoPago(process.env.REACT_APP_MPAGO_KEY, {
    locale: "es-AR",
  });

  // function handleChange(evt) {
  //   const input = evt.target;
  //   const copyUserInfo = { ...userInfo };
  //   copyUserInfo[input.name] = input.value;
  //   setUserInfo(copyUserInfo);
  // }

  function handleClick() {
    if (log) {
      setBuy(true);
    } else {
      alert("Debes iniciar sesión para continuar con la compra");
    }
  }

  function createCheckout(preferenceId) {
    mercadopago.checkout({
      preference: {
        id: preferenceId,
      },
      autoOpen: true,
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log({ userInfo, user });
    axios
      .post("/purchase/create", userInfo)
      .then((response) => createCheckout(response.data.id))
      .catch((error) => {
        console.log(error);
      });
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
                defaultValue={user.name}
                // onChange={handleChange}
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
                defaultValue={user.email}
                // onChange={handleChange}
              ></input>
            </label>
          </div>
          {/* <div className="form-group">
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
          </div> */}
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
