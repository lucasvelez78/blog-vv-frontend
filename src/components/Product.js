import { useState, useContext } from "react";
import { logContext } from "../context/logContext";
import swal from "sweetalert";

import BuyForm from "./BuyForm";

function Product(props) {
  const product = props.title;
  const price = props.price;
  const { log } = useContext(logContext);
  const [buy, setBuy] = useState(false);

  function handleClick() {
    if (log) {
      setBuy(true);
    } else {
      swal({
        text: "Debes iniciar sesión para continuar con la compra",
      });
    }
  }

  if (buy) {
    return (
      <div className="producto-container">
        <BuyForm title={product} price={price} />
      </div>
    );
  }

  return (
    <div className="producto-container">
      <div className="producto">
        <div className="producto-heading">
          <h1>{props.title}</h1>
        </div>
        <div className="producto-description">
          <div className="servicios-container-img">
            <img src={props.img} alt="zen"></img>
          </div>
          <div className="servicios-container-description">
            <p>{props.content}</p>
            <h4>Tarifa: ${props.price}</h4>
            <button onClick={handleClick}>Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
