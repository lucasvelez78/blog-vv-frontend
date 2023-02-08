import Product from "../components/Product";
import { useParams } from "react-router-dom";
import productsData from "../productsData";
import Footer from "../components/Footer";

function ProductDetail() {
  const producto = useParams().product;
  let index;
  if (producto === "Reiki") {
    index = 0;
  } else if (producto === "Tarot") {
    index = 1;
  } else {
    index = 2;
  }
  return (
    <div className="servicios">
      <div>
        <Product
          img={productsData[index].img}
          product={productsData[index].id}
          title={productsData[index].title}
          content={productsData[index].content}
          price={productsData[index].price}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ProductDetail;
