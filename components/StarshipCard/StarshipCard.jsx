import { Link } from "react-router-dom";

const StarshipCard = (props) => {
  const shipId = props.ship.url.slice(21)
  return (  
    <div>
      <Link to={`${shipId}`}>
        <button className="starship-card">{props.ship.name}</button>
      </Link>
    </div>
  );
}

export default StarshipCard