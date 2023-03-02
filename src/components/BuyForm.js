import { useState, useContext } from "react";
import { logContext } from "../context/logContext";
import swal from "sweetalert";

function BuyForm(props) {
  const product = props.title;
  const price = props.price;
  const { user } = useContext(logContext);
  const [userInfo] = useState({
    name: user.name,
    email: user.email,
    product: product,
    price: price,
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    swal(
      "For now, this website is just a sample.\n You can't purchase anything here just yet...\n Thanks for visiting!"
    );
  }

  return (
    <div className="form-buy-div">
      <form onSubmit={handleSubmit} className="form-buy">
        <div className="buy-form-group">
          <label htmlFor="name">
            Tu nombre
            <input
              className="buy-form-input input-name"
              type="text"
              name="name"
              defaultValue={user.name}
            ></input>
          </label>
        </div>
        <div className="buy-form-group">
          <label htmlFor="email">
            Tu email
            <input
              className="buy-form-input input-email"
              type="text"
              name="email"
              defaultValue={user.email}
            ></input>
          </label>
        </div>
        <div className="buy-form-group">
          <label htmlFor="price">
            Precio
            <input
              className="buy-form-input input-email"
              type="text"
              name="price"
              defaultValue={userInfo.price}
            ></input>
          </label>
        </div>
        <div className="buy-form-group">
          <label htmlFor="message">
            Tu producto
            <input
              className="buy-form-input input-text"
              type="text"
              name="producto"
              defaultValue={product}
            ></input>
          </label>
        </div>
        <button className="buy-form-btn" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
}

export default BuyForm;
