import { useState } from "react";
import "./App.css";

// Renk seçenekleri
const colors = ["#ec619b", "#c774d7", "#f7d154", "#63c9f9", "#b4dc82"];

function App() {
  // Tüm notları tutacağımız dizi
  const [notes, setNotes] = useState([]);

  // Yazılan notun içeriği
  const [noteText, setNoteText] = useState("");

  // Kullanıcının seçtiği renk
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  // Arama kutusuna yazılan metin
  const [searchTerm, setSearchTerm] = useState("");

  // Not ekleme fonksiyonu
  const addNote = () => {
    if (!noteText.trim()) return; // boşsa ekleme

    // Yeni not objesi oluştur
    const newNote = {
      text: noteText,
      color: selectedColor,
    };

    // notes dizisine ekle
    setNotes([...notes, newNote]);

    // textarea'yı temizle
    setNoteText("");
  };

  // Arama filtresi
  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>NotesApp</h1>

      {/* Arama kutusu */}
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="note-input">
        {/* Not yazma alanı */}
        <textarea
          placeholder="Enter your note here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />

        {/* Renk seçenekleri */}
        <div className="color-options">
          {colors.map((color) => (
            <button
              key={color}
              className={`color ${selectedColor === color ? "selected" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        {/* Not ekleme butonu */}
        <button className="add-btn" onClick={addNote}>
          ADD
        </button>
      </div>

      {/* Notların listelendiği alan */}
      <div className="notes">
        {filteredNotes.map((note, idx) => (
          <div
            key={idx}
            className="note"
            style={{ backgroundColor: note.color }}
          >
            {note.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
