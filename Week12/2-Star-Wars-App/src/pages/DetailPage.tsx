import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import type { Starship } from "../types/starship";
import axios from "axios";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [starship, setStarship] = useState<Starship | null>(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${id}/`)
      .then((res) => setStarship(res.data))
      .catch(() => setStarship(null));
  }, [id]);

  if (!starship) return <p>Loading starship details...</p>;

  return (
    <div className="detail-wrapper">
      <div className="detail-container">
        <h2>{starship.name}</h2>
        <p>
          <strong>Model:</strong> {starship.model}
        </p>
        <p>
          <strong>Manufacturer:</strong> {starship.manufacturer}
        </p>
        <p>
          <strong>Passengers:</strong> {starship.passengers}
        </p>
        <p>
          <strong>Crew:</strong> {starship.crew}
        </p>
        <p>
          <strong>Speed:</strong> {starship.max_atmosphering_speed}
        </p>
        <p>
          <strong>Cargo Capacity:</strong> {starship.cargo_capacity}
        </p>
        <div className="back-button">
          <button onClick={() => navigate(-1)}>← Back</button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
