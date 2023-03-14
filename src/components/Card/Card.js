import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={props.image} className="card-image" />
          </div>
          <div className="flip-card-back">
            <h1>{props.title}</h1>
            <p>
              {props.description}
            </p>
            <p>
             {props.technologies}
            </p>
            <p>
              {props.github}
            </p>
            <p>
              Site is live at{" "}
              {props.live}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
