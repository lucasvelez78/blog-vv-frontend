import Card from "../components/Card";
import productosData from "../productsData";
import Footer from "../components/Footer";

function Products() {
  return (
    <div className="servicios">
      <div className="servicios-heading publicacionesHeading">
        <h1>Servicios</h1>
      </div>
      <div className="servicios-container">
        {productosData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Products;
