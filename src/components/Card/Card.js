import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          {/* Front */}
          <div className="flip-card-front">
            <h3 className="front-card-title">{props.title}</h3>
            <img src={props.image} className="card-image" />
          </div>
          {/* Back */}
          <div className="flip-card-back">
            <h2 className="back-card-title">{props.title}</h2>
            <p className="description">{props.description}</p>
            <h4>Technologies</h4>
            <p>
             {props.technologies}
            </p>
            <h4>GitHub</h4>
            <p>
              <a href={props.github}>{props.github}</a>
            </p>
            {props.live === "" ? "" : <p> Live at: <a href={props.live} >{props.live}</a> </p>}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Card;
