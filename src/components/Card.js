import { Link } from "react-router-dom";
import { useState } from "react";

function Card(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const onMouseOver = () => {
    setIsMouseOver(true);
  };
  const onMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <Link className="card-link" to={`/${props.title}`}>
      {isMouseOver ? (
        <div
          className="card"
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <div className="card-img">
            <img src="images/tarot-card.jpg" alt="Zen"></img>
          </div>
          <div className="card-description">
            <h3>{props.title}</h3>
          </div>
        </div>
      ) : (
        <div
          className="card"
          onMouseOver={onMouseOver}
          onMouseLeave={onMouseLeave}
        >
          <div className="card-img">
            <img src="images/tarot-card.jpg" alt="Zen"></img>
          </div>
        </div>
      )}
    </Link>
  );
}

export default Card;
