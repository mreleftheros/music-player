const musicContainer = document.querySelector(".music-container");
const title = document.getElementById("title");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
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


// event listeners

