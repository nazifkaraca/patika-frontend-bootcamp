import { useState, useEffect } from "react";
import "./App.css";

function sleep(ms = 500) {
  return new Promise((res) => setTimeout(res, ms));
}

const boardItem = [
  { id: 1, name: "green" },
  { id: 2, name: "blue" },
  { id: 3, name: "yellow" },
  { id: 4, name: "red" },
];

function App() {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [compArr, setCompArr] = useState([]);
  const [userArr, setUserArr] = useState([]);
  const [turn, setTurn] = useState(true);

  const handleStart = () => {
    setIsPlaying(true);
    setCompArr([]);
    setUserArr([]);
    setScore(0);
    setTimeout(() => {
      computerTurn();
    }, 1000);
  };

  const computerTurn = () => {
    const random = Math.floor(Math.random() * 4) + 1;
    setCompArr((prev) => [...prev, random]);
  };

  useEffect(() => {
    const animateCompArr = async () => {
      for (let i = 0; i < compArr.length; i++) {
        const pad = document.getElementById(compArr[i]);
        pad?.classList.add("active");
        await sleep();
        pad?.classList.remove("active");
        await sleep();
      }
      if (compArr.length !== 0) {
        setTurn(!turn);
      }
    };
    animateCompArr();
  }, [compArr]);

  useEffect(() => {
    if (userArr.length === 0) return;
    if (userArr.length === compArr.length) {
      if (JSON.stringify(userArr) === JSON.stringify(compArr)) {
        setScore((prev) => prev + 1);
        setUserArr([]);
        setTimeout(() => {
          computerTurn();
        }, 1000);
        setTurn(!turn);
      } else {
        setIsPlaying(false);
      }
    }
  }, [userArr]);

  const handleUserClick = async (e) => {
    const id = parseInt(e.target.id);
    setUserArr((prev) => [...prev, id]);
    const pad = document.getElementById(id);
    pad?.classList.add("active");
    await sleep();
    pad?.classList.remove("active");
  };

  return (
    <div className="App">
      <h2>Score: {score}</h2>
      {isPlaying && <p>{turn ? "Simon" : "You"}</p>}
      {!isPlaying && (
        <div className="start">
          <h2>Simon Game</h2>
          <div className="startBtn" onClick={handleStart}>
            Start Game
          </div>
        </div>
      )}
      {isPlaying && (
        <div className="board">
          <div className="pads">
            {boardItem.map((item) => (
              <div
                key={item.name}
                id={item.id}
                className={`pad ${item.name}`}
                onClick={handleUserClick}
              ></div>
            ))}
          </div>
        </div>
      )}

      <div id="countdown">
        <div id="countdown-number">
          <svg>
            <circle r="18" cx="20" cy="20"></circle>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
