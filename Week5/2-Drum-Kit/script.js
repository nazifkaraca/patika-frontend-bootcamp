const sounds = {
  a: "sound/boom.wav",
  s: "sound/clap.wav",
  d: "sound/tom.wav",
  f: "sound/hihat.wav",
  g: "sound/kick.wav",
  h: "sound/openhat.wav",
  j: "sound/ride.wav",
  k: "sound/snare.wav",
  l: "sound/tink.wav",
};

document.addEventListener("mousedown", function (event) {
  const keyElement = document.getElementById(event.target.id);
  if (keyElement) {
    keyElement.classList.add("active");
  }

  if (event.target.id && sounds[event.target.id.toLowerCase()]) {
    const sound = new Audio(sounds[event.target.id.toLowerCase()]);
    sound.currentTime = 0;
    sound.play();
  }
});

document.addEventListener("mouseup", function (event) {
  const keyElement = document.getElementById(event.target.id);
  if (keyElement) {
    keyElement.classList.remove("active");
  }
});

document.addEventListener("keydown", function (event) {
  const keyElement = document.getElementById(event.key.toLowerCase());

  if (keyElement) {
    keyElement.classList.add("active");
  }

  if (sounds[event.key.toLowerCase()]) {
    const sound = new Audio(sounds[event.key.toLowerCase()]);
    sound.currentTime = 0;
    sound.play();
  }
});

document.addEventListener("keyup", function (event) {
  const keyElement = document.getElementById(event.key.toLowerCase());
  if (keyElement) {
    keyElement.classList.remove("active");
  }
});
