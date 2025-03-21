// DOM Content Loaded
// Sayfa kendini tamamen yüklediği anda JS içindeki tüm kodları çalıştır ve hazırda bekle.

document.addEventListener("DOMContentLoaded", () => {
  // Html elemanları seçildi
  // Katılımcıların isimleri yazılıyor
  const participantInput = document.getElementById("participantInput");

  // Katılımcılar ekleniyor
  const addParticipantButton = document.getElementById("addParticipantButton");

  // Katılımcıların listelendiği yer
  const participantList = document.getElementById("participantList");

  // Çekiliş yapma durumu
  const drawButton = document.getElementById("drawButton");

  // Kazananların gösterildiği yer
  const winnerDisplay = document.getElementById("winner");

  // Eğer localstorage'da participants listesi doluysa getir, yoksa boş dizi getir
  const participants = JSON.parse(localStorage.getItem("participants")) || [];

  // Katılımcıları local'a kaydetme
  // Participants listesine stringfy(JSON okunabilirliğinin artması için) ile kaydediyoruz
  const saveParticipants = () => {
    localStorage.setItem("participants", JSON.stringify(participants));
  };

  // Katılımcıları ekranda listeleme fonksiyonu
  const renderParticipants = () => {
    participantList.innerHTML = "";

    // Participants'taki her bir elemenı listeye ekliyoruz
    participants.forEach((participant, index) => {
      // Her eleman için li oluşturuyoruz
      const li = document.createElement("li");
      // Her elemana bir class ismi veriyoruz
      li.className = "participant-item";
      // Her class için bir span açıyor ve sil butonunu ekliyoruz
      li.innerHTML = ` 
      <span>${participant}</span>
      <button class="delete-button">Sil</button>
      `;

      // Sil butonuna basılınca çalışacak olan kod
      li.querySelector(".delete-button").addEventListener("click", () => {
        // İlgili kullancıyı sil
        participants.splice(index, 1);
        // Listeyi güncelle
        saveParticipants();
        // Kullanıcıları getir
        renderParticipants();
      });
      participantList.appendChild(li); // Listeyi ekrana yazdırıyoruz
    });
  };

  // Ekle butonuna tıkladığımızda çalışacak kod
  addParticipantButton.addEventListener("click", () => {
    const participantName = participantInput.value.trim();

    if (participantName !== "") {
      participants.push(participantName);
      participantInput.value = "";
      saveParticipants();
      renderParticipants();
    }
  });

  // Çekiliş butonuna tıklandığında çalışacak kod
  drawButton.addEventListener("click", () => {
    if (participants.length === 0) {
      winnerDisplay.textContent = "Katılımcı Yok!";
      return;
    }
    const randomIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[randomIndex];
    winnerDisplay.textContent = `Kazanan: ${winner}`;
  });

  renderParticipants();
});
