const colors = ["#f06292", "#ba68c8", "#ffd54f", "#4fc3f7", "#aed581"];
let selectedColor = colors[0];
const notes = [];

const noteText = document.getElementById("noteText");
const addBtn = document.getElementById("addBtn");
const notesContainer = document.getElementById("notesContainer");
const search = document.getElementById("search");
const colorOptions = document.getElementById("colorOptions");

// Renk butonlarını ekle
colors.forEach((color) => {
  const btn = document.createElement("button");
  btn.className = "color";
  btn.style.backgroundColor = color;
  if (color === selectedColor) btn.classList.add("selected");
  btn.onclick = () => {
    selectedColor = color;
    document
      .querySelectorAll(".color")
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
  };
  colorOptions.appendChild(btn);
});

addBtn.onclick = () => {
  const text = noteText.value.trim();
  if (!text) return;
  notes.push({ text, color: selectedColor });
  noteText.value = "";
  renderNotes();
};

search.oninput = () => renderNotes();

function renderNotes() {
  const query = search.value.toLowerCase();
  notesContainer.innerHTML = "";
  notes
    .filter((note) => note.text.toLowerCase().includes(query))
    .forEach((note) => {
      const div = document.createElement("div");
      div.className = "note";
      div.style.backgroundColor = note.color;
      div.textContent = note.text;
      notesContainer.appendChild(div);
    });
}
