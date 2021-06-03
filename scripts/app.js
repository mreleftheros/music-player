const musicContainer = document.querySelector(".music-container");
const title = document.getElementById("title");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const songs = ["hey", "summer", "ukulele"];

// function to load a song
const loadSong = song => {
  //change src
  let audioSrc = `./assets/${song}.mp3`;
  audio.src = audioSrc;

  //change cover
  let imgSrc = `./assets/${song}.jpg`;
  cover.src = imgSrc;
};

const playSong = () => {
  if(audio.paused) {
    musicContainer.classList.add("play");
    audio.play();
    play.innerHTML = `<i class="fas fa-pause"></i>`;
  }
  else if(!audio.paused) {
    musicContainer.classList.remove("play");
    audio.pause();
    play.innerHTML = `<i class="fas fa-play"></i>`;
  }
}


// event listeners
play.addEventListener("click", playSong);