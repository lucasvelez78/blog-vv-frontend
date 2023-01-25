import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

function Purchased() {
  const [searchParams] = useSearchParams();
  const payment_id = searchParams.get("payment_id");
  const status = searchParams.get("status");
  const order_id = searchParams.get("merchant_order_id");

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("storedUser"));
    console.log(localData);
    axios
      .post("/purchase", localData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="purchased">
      <h1>Gracias por tu compra</h1>
      <h4>
        Estado de la compra: <span className="detail">{status}</span>
      </h4>
      <h4>
        Referencia de pago: <span className="detail">{payment_id}</span>
      </h4>
      <h4>
        Número de orden: <span className="detail">{order_id}</span>
      </h4>
      <h2>Feliz día!</h2>
    </div>
  );
}

export default Purchased;
