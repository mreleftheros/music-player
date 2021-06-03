const musicContainer = document.querySelector(".music-container");
const title = document.getElementById("title");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const volume = document.getElementById("volume");
const songs = ["hey", "summer", "ukulele"];
let currentSong = songs[0];
let isPlaying = false;

// function to load a song
const loadSong = () => {
  // change src
  let audioSrc = `./assets/${currentSong}.mp3`;
  audio.src = audioSrc;

  // change title
  title.textContent = currentSong;

  // change cover
  let imgSrc = `./assets/${currentSong}.jpg`;
  cover.src = imgSrc;
};

// function to play song
const playSong = () => {
  if(audio.paused) {
    isPlaying = true;
    musicContainer.classList.add("play");
    audio.play();
    play.innerHTML = `<i class="fas fa-pause"></i>`;
  }
  else if(!audio.paused) {
    isPlaying = false;
    musicContainer.classList.remove("play");
    audio.pause();
    play.innerHTML = `<i class="fas fa-play"></i>`;
  }
};

// function to load next song
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

  //check if previous song was playing and automatically play next song
  if(isPlaying)
    audio.play();
};

// function to load previous song
const loadPreviousSong = () => {
  let songIndex = songs.indexOf(currentSong);
  let previousSongIndex = songIndex - 1;

  //check if nextSongIndex is in array
  if(previousSongIndex < 0)
    currentSong = songs[songs.length - 1];
  else
    currentSong = songs[previousSongIndex];

  loadSong();

  //check if previous song was playing and automatically play next song
  if(isPlaying)
    audio.play();
};

// event listeners
play.addEventListener("click", playSong);
next.addEventListener("click", loadNextSong);
previous.addEventListener("click", loadPreviousSong);