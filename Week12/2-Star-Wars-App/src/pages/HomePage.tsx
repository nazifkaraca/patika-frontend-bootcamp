import { useEffect, useState } from "react";
import axios from "axios";
import type { Starship } from "../types/starship";
import StarshipCard from "../components/StarshipCard";

const HomePage = () => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [search, setSearch] = useState("");
  const [nextUrl, setNextUrl] = useState<string | null>(
    "https://swapi.dev/api/starships/"
  );

  const fetchStarships = async (url: string, append = false) => {
    const response = await axios.get(url);
    const data = response.data;
    if (append) {
      setStarships((prev) => [...prev, ...data.results]);
    } else {
      setStarships(data.results);
    }
    setNextUrl(data.next);
  };

  const handleSearch = () => {
    if (!search.trim()) return;
    fetchStarships(`https://swapi.dev/api/starships/?search=${search}`);
  };

  useEffect(() => {
    if (nextUrl) fetchStarships(nextUrl);
  }, []);

  return (
    <div>
      <h1>Star Wars Starships</h1>
      <input
        type="text"
        placeholder="Search by name or model"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="grid">
        {starships.map((s) => (
          <StarshipCard key={s.url} starship={s} />
        ))}
      </div>

      {nextUrl && (
        <button onClick={() => fetchStarships(nextUrl!, true)}>
          Load More
        </button>
      )}
    </div>
  );
};

export default HomePage;
