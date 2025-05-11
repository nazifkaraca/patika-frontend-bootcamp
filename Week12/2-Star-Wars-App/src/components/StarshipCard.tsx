import type { Starship } from "../types/starship";
import { Link } from "react-router-dom";

interface Props {
  starship: Starship;
}

const getIdFromUrl = (url: string): string => {
  const match = url.match(/\/starships\/(\d+)\//);
  return match ? match[1] : "";
};

const StarshipCard = ({ starship }: Props) => {
  const id = getIdFromUrl(starship.url);

  return (
    <Link to={`/starship/${id}`} className="card">
      <h3>{starship.name}</h3>
      <p>Model: {starship.model}</p>
      <p>Speed: {starship.max_atmosphering_speed}</p>
    </Link>
  );
};

export default StarshipCard;
