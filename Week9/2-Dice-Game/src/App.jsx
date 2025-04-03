// React kütüphanesinden gerekli hook'lar import ediliyor
import React, { useState } from "react";

// Alt bileşenler import ediliyor
import Dice from "./components/Dice"; // Zar bileşeni (her biri 1 zar gösterir)
import Result from "./components/Result"; // Oyun sonucunu gösterir
import UsernameInput from "./components/UsernameInput"; // Kullanıcının adını değiştirebileceği input
import "./App.css"; // Stil dosyası

const App = () => {
  // Kullanıcı adı durumu
  const [playerName, setPlayerName] = useState("Player 1");

  // Her iki oyuncunun zar değerleri
  const [playerRoll, setPlayerRoll] = useState(1);
  const [pcRoll, setPcRoll] = useState(1);

  // Zar atma animasyonu sırasında butonu devre dışı bırakmak için
  const [isRolling, setIsRolling] = useState(false);

  // Oyun sonucunu tutan state (Kazanan, kaybeden veya berabere)
  const [result, setResult] = useState("");

  // Zar atma işlemi başlatılır
  const rollDice = () => {
    setIsRolling(true); // Animasyon sırasında buton pasifleşsin
    setResult(""); // Önceki sonucu temizle

    // 100ms aralıklarla rastgele zarlar gösterilerek "animasyon" yapılır
    const interval = setInterval(() => {
      setPlayerRoll(Math.ceil(Math.random() * 6)); // 1-6 arası rastgele zar değeri
      setPcRoll(Math.ceil(Math.random() * 6));
    }, 100);

    // 3 saniye sonra animasyonu durdur ve gerçek sonuçları üret
    setTimeout(() => {
      clearInterval(interval); // Animasyonu durdur

      const finalPlayer = Math.ceil(Math.random() * 6); // Kullanıcı için gerçek zar sonucu
      const finalPC = Math.ceil(Math.random() * 6); // Bilgisayar için gerçek zar sonucu

      // Sonuçları güncelle
      setPlayerRoll(finalPlayer);
      setPcRoll(finalPC);
      setIsRolling(false); // Butonu tekrar aktif hale getir

      // Karşılaştırma yaparak sonucu belirle
      if (finalPlayer > finalPC) setResult(`${playerName} wins! 🎉`);
      else if (finalPC > finalPlayer) setResult("Computer wins 💻");
      else setResult("Draw 🤝");
    }, 3000);
  };

  // JSX çıktısı
  return (
    <div className="app">
      <h1>🎲 Dice Game 🎲</h1>

      {/* Kullanıcı adı değiştirme bileşeni */}
      <UsernameInput name={playerName} onChange={setPlayerName} />

      {/* Zar görselleri */}
      <div className="dice-container">
        <div>
          <p>{playerName}</p>
          <Dice value={playerRoll} />
        </div>
        <div>
          <p>Computer</p>
          <Dice value={pcRoll} />
        </div>
      </div>

      {/* Zar atma butonu */}
      <button onClick={rollDice} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Roll Dice"}
      </button>

      {/* Oyun sonucu */}
      <Result text={result} />
    </div>
  );
};

export default App;
