import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <p>Click the button below to search for songs.</p>
      <a href="/search">
        <button>Go to Search</button>
      </a>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Anasayfa */}
        <Route path="/" element={<HomePage />} />
        {/* Arama Kısmı */}
        <Route path="/search/" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
