import { useState } from "react";
import "./App.css";

const colors = ["#f06292", "#ba68c8", "#ffd54f", "#4fc3f7", "#aed581"];

function App() {
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [searchTerm, setSearchTerm] = useState("");

  const addNote = () => {
    if (!noteText.trim()) return;
    setNotes([...notes, { text: noteText, color: selectedColor }]);
    setNoteText("");
  };

  const filteredNotes = notes.filter((note) =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>NotesApp</h1>
      <input
        className="search"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="note-input">
        <textarea
          placeholder="Enter your note here..."
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
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
        <button className="add-btn" onClick={addNote}>
          ADD
        </button>
      </div>
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
