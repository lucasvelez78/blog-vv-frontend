import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt="Zen"></img>
      </div>
      <div className="card-description">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="card-bottom">
          <h4>{props.price}</h4>
          <div className="card-button-container">
            <Link className="card-button" to={`/${props.title}`}>
              Ver más
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
