// Soru Listesi
const questions = [
  {
    question: "HTML'in açılımı nedir?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Texst Markup Leveler",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Bir HTML belgesinde en dışta yer alan etiket hangisidir?",
    options: ["<head>", "<html>", "<body>", "<main>"],
    answer: "<html>",
  },
  {
    question: "CSS'in açılımı nedir?",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Syntax",
      "Colorful Style System",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "Bir HTML elementine stil vermek için hangi HTML özniteliği (attribute) kullanılır?",
    options: ["font", "class", "style", "styles"],
    answer: "style",
  },
  {
    question: "JavaScript hangi dil türüne girer?",
    options: ["Statik", "Fonksiyonel", "Yorumlanan", "Derlenmiş"],
    answer: "Yorumlanan",
  },
  {
    question:
      "Aşağıdakilerden hangisi geçerli bir JavaScript değişken ismidir?",
    options: ["1number", "_number", "number-1", "number 1"],
    answer: "_number",
  },
  {
    question:
      "HTML'de bağlantı (link) oluşturmak için hangi etiket kullanılır?",
    options: ["<a>", "<link>", "<href>", "<connect>"],
    answer: "<a>",
  },
  {
    question:
      "Bir stil dosyasını HTML'e dahil etmek için hangi etiket kullanılır?",
    options: ["<css>", "<style>", "<link>", "<script>"],
    answer: "<link>",
  },
  {
    question: "JavaScript'te `const` anahtar kelimesi ne işe yarar?",
    options: [
      "Bir değişkeni sabit olarak tanımlar",
      "Bir döngü oluşturur",
      "Koşul kontrolü yapar",
      "Fonksiyon oluşturur",
    ],
    answer: "Bir değişkeni sabit olarak tanımlar",
  },
  {
    question: "CSS'te bir öğeyi gizlemek için hangi özellik kullanılır?",
    options: ["display: none", "visibility: hidden", "opacity: 0", "Hepsi"],
    answer: "Hepsi",
  },
  {
    question: "HTML'de tablo oluşturmak için hangi etiket kullanılır?",
    options: ["<table>", "<tab>", "<td>", "<tr>"],
    answer: "<table>",
  },
  {
    question: "JavaScript'te `===` operatörü ne yapar?",
    options: [
      "Sadece değer karşılaştırır",
      "Hem değer hem tür karşılaştırır",
      "Sadece tür karşılaştırır",
      "Toplama işlemi yapar",
    ],
    answer: "Hem değer hem tür karşılaştırır",
  },
  {
    question: "CSS’te sınıf seçicisi (class selector) nasıl yazılır?",
    options: [".sınıf", "#sınıf", "sınıf", "*sınıf"],
    answer: ".sınıf",
  },
  {
    question: "`<input>` etiketi ne işe yarar?",
    options: [
      "Görsel ekler",
      "Kullanıcıdan veri almak için alan oluşturur",
      "Tablo oluşturur",
      "Yönlendirme yapar",
    ],
    answer: "Kullanıcıdan veri almak için alan oluşturur",
  },
  {
    question: "JavaScript'te `for` döngüsü ne işe yarar?",
    options: [
      "Fonksiyon çağırır",
      "Bir işlemi belirli sayıda tekrar eder",
      "Koşul kontrolü yapar",
      "Olay dinler",
    ],
    answer: "Bir işlemi belirli sayıda tekrar eder",
  },
  {
    question: "CSS'te `position: absolute` ne anlama gelir?",
    options: [
      "Öğe belge akışına göre yerleşir",
      "Öğe bir üst öğeye göre konumlanır",
      "Öğe sabit kalır",
      "Varsayılan konuma gelir",
    ],
    answer: "Öğe bir üst öğeye göre konumlanır",
  },
  {
    question:
      "JavaScript'te `document.getElementById()` fonksiyonu ne işe yarar?",
    options: [
      "Belgedeki bir elementi id'sine göre seçer",
      "Yeni bir element oluşturur",
      "Bir stil uygular",
      "Sayfa yönlendirir",
    ],
    answer: "Belgedeki bir elementi id'sine göre seçer",
  },
  {
    question: "CSS'te `z-index` özelliği neyi belirler?",
    options: [
      "Yazı boyutunu",
      "Yükseklik değerini",
      "Katman sırasını",
      "Renk tonunu",
    ],
    answer: "Katman sırasını",
  },
  {
    question: "HTML'de `placeholder` özniteliği ne işe yarar?",
    options: [
      "Formu gönderir",
      "Varsayılan bir değer gösterir",
      "Input alanının arka planını değiştirir",
      "Kullanıcı adı kontrolü yapar",
    ],
    answer: "Varsayılan bir değer gösterir",
  },
  {
    question:
      "JavaScript'te bir olay (event) dinlemek için hangi yöntem kullanılır?",
    options: ["addEventListener", "getEvent", "listenEvent", "eventOn"],
    answer: "addEventListener",
  },
];

let currentQuestionIndex = 0;

// Sayfa yüklendiği zamanda ilk soruyu göstermesini sağlayacağız
loadQuestion(currentQuestionIndex);

function loadQuestion(index) {
  const questionElement = document.getElementById("question-text");
  const optionList = document.getElementById("options-list");
  const feedback = document.getElementById("feedback");
  const progressBar = document.getElementById("progress-bar");

  questionElement.textContent = `Soru ${index + 1}: ${
    questions[index].question
  }`;

  optionList.innerHTML = "";
  feedback.style.display = "none";

  //   progressBar.classList.remove("remove");
  progressBar.display = "none";

  questions[index].options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option";
    button.textContent = option;

    button.onclick = () => checkAnswer(button, option);

    optionList.appendChild(button);
  });
}

function checkAnswer(button, selectedAnswer) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  const progressBar = document.getElementById("progress-bar");

  if (selectedAnswer === correctAnswer) {
    button.classList.add("correct");

    showFeedbackAndNext("Soruyu doğru bildiniz!", true);

    progressBar.style.display = "block";
    progressBar.classList.remove("active");
    void progressBar.offsetWidth;
    progressBar.classList.add("active");
  } else {
    button.classList.add("wrong");
    showFeedbackAndNext("Yanlış cevap.", false);
  }
}

function showFeedbackAndNext(message, isCorrect) {
  const feedback = document.getElementById("feedback");
  feedback.textContent = message;
  feedback.style.display = "block";

  setTimeout(() => {
    if (isCorrect) {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
      } else {
        feedback.textContent = "Tebrikler, tüm soruları doğru bildiniz!";
        feedback.style.display = "block";
      }
    } else {
      location.reload();
    }
  }, 2000);
}
