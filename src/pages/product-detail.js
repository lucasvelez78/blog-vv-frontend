import Product from "../components/Product";
import { useParams } from "react-router-dom";
import productsData from "../productsData";

function ProductDetail() {
  const producto = useParams().product;
  let index = null;
  if (producto === "Reiki") {
    index = 0;
  } else if (producto === "Tarot") {
    index = 1;
  } else {
    index = 2;
  }
  return (
    <div className="servicios">
      <div className="homeSection">
        <Product
          img={productsData[index].img}
          product={productsData[index].id}
          title={productsData[index].title}
          content={productsData[index].content}
          price={productsData[index].price}
        />
      </div>
    </div>
  );
}

export default ProductDetail;
