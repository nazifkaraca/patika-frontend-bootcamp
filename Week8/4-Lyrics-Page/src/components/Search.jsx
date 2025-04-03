import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

function Search() {
  const [searchTerm, setSearchTerm] = useEffect("");
  const [result, setResult] = useState([]);
  const [lyrics, setLyrics] = useState("");
  const [pagination, setPagination] = useState({ prev: null, next: null });
  const navigate = useNavigate();

  const apiURL = "https://api.lyrics.ovh";

  // Şarkı arama fonksiyonu
  const searchSongs = async (term) => {
    try {
      const res = await fetch(`${apiURL}/suggest/`);
    } catch (error) {}
  };

  return <>asfasfasf</>;
}

export default Search;
