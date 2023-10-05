console.log("Welcome to Spotify!");
let songIndex = 0;
let audioElement = new Audio("songs/0.mp3");
let masterplay = document.getElementById("masterplay");
let mastersongname = document.getElementById("mastersongname");
let myProgressbar = document.getElementById("myProgressbar");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
  { songName: "Faded", filepath: "songs/0.mp3", coverPath: "img/alan.jpg" },
  { songName: "On my way", filepath: "songs/1.mp3", coverPath: "img/alan.jpg" },
  {
    songName: "The Spectre",
    filepath: "songs/2.mp3",
    coverPath: "img/alan.jpg",
  },
  { songName: "Alone", filepath: "songs/3.mp3", coverPath: "img/alan.jpg" },
  { songName: "The drum", filepath: "songs/4.mp3", coverPath: "img/alan.jpg" },
  { songName: "Darkside", filepath: "songs/5.mp3", coverPath: "img/alan.jpg" },
];

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};
Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      mastersongname.innerText = songs[songIndex].songName;
      masterplay.classList.remove("fa-play-circle");
      masterplay.classList.add("fa-pause-circle");
    });
  }
);
//Play/pause
masterplay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
  } else {
    audioElement.pause();
    masterplay.classList.remove("fa-pause-circle");
    masterplay.classList.add("fa-play-circle");
  }
});
// Listen to events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressbar.value = progress;
});
myProgressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressbar.value * audioElement.duration) / 100;
});
document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  mastersongname.innerText = songs[songIndex].songName;
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  mastersongname.innerText = songs[songIndex].songName;
  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});
