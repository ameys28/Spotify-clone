console.log("Welcome to Spotify!");
let songIndex = 0;
let audioElement = new Audio("songs/faded.mp3");
let masterplay = document.getElementById("masterplay");
let myProgressbar = document.getElementById("myProgressbar");

let songs = [
  { songName: "Faded", filepath: "songs/faded.mp3" },
  { songName: "Faded", filepath: "songs/faded.mp3" },
  { songName: "Faded", filepath: "songs/faded.mp3" },
  { songName: "Faded", filepath: "songs/faded.mp3" },
  { songName: "Faded", filepath: "songs/faded.mp3" },
  { songName: "Faded", filepath: "songs/faded.mp3" },
];
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
audioElement.addEventListener('timeupdate', () => {
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
  myProgressbar.value = progress;
});
myProgressbar.addEventListener('change', ()=>{
  audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})
