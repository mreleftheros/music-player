const musicContainer = document.querySelector(".music-container");
const title = document.getElementById("title");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const songs = ["hey", "summer", "ukulele"];
let currentSong = songs[0];

// function to load a song
const loadSong = () => {
  //change src
  let audioSrc = `./assets/${currentSong}.mp3`;
  audio.src = audioSrc;

  //change title
  title.textContent = currentSong;

  //change cover
  let imgSrc = `./assets/${currentSong}.jpg`;
  cover.src = imgSrc;
};

// function to play song
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
};

//function to load next song
const loadNextSong = () => {
  let songIndex = songs.indexOf(currentSong);
  let nextSongIndex = songIndex + 1;

  //check if nextSongIndex is in array
  let len = songs.length;
  if(nextSongIndex === len)
    currentSong = songs[0];
  else
    currentSong = songs[nextSongIndex];

  loadSong();
};

// event listeners
play.addEventListener("click", playSong);
next.addEventListener("click", loadNextSong);