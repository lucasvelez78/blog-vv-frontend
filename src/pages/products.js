import Card from "../components/Card";
import productosData from "../productsData";

function Products() {
  return (
    <div className="servicios">
      <div className="publicacionesHeading">
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
        {/* <Card
          id="reiki"
          img="images/reiki.jpeg"
          title="Reiki"
          description="El Reiki es una práctica espiritual con las dimensiones basadas en la materia y espíritu."
          price="180.000"
        />
        <Card
          id="tarot"
          img="images/tarot.png"
          title="Tarot"
          description="Este método, desde tiempos inmemorables, ha sido relacionado con el misticismo y la magia."
          price="110.000"
        />
        <Card
          id="angeles"
          img="images/wings.jpeg"
          title="Ángeles"
          description="Ellos tienen el poder de verlo todo y están dispuestos a ayudarnos, solo debemos pedir su protección."
          price="110.000"
        /> */}
      </div>
    </div>
  );
}

export default Products;
