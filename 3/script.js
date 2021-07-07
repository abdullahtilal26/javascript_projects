const video = document.getElementById("video");
const play = document.getElementById("play");
const stopbtn = document.getElementById("stop");
const progress = document.getElementById("progress");
const time = document.getElementById("time");
const volume = document.getElementById("volume");
const speaker = document.getElementById("speaker");
const volumeValue = document.getElementById("volumevalue");

const playPauseVideo = (e) => {
  if (video.paused) {
    video.play(); //built in video.paused and video.play() methods in video element
  } else {
    video.pause();
  }
};

const updateIcons = () => {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
};

const stopVideo = () => {
  // reset time
  video.currentTime = 0;
  video.pause();
};
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100; //duration toatal duration and current time->time elapsed;
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = "0" + String(minutes);
  }

  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = "0" + String(seconds);
  }

  time.innerHTML = `${minutes}:${seconds}`; //innertextvs innerhtml
};
const updateVideoProgress = () => {
  video.currentTime = (progress.value / 100) * video.duration;
};

const updateVolume = () => {
  //console.log();
  video.volume = volume.value;
};
const updateAudio = () => {
  // console.log(video.volume);
  volumeValue.innerHTML = Math.floor(video.volume * 100);
  if (video.volume == 0) {
    speaker.className = "fas fa-volume-mute btn2";
  } else {
    speaker.className = "fas fa-volume btn2";
  }
};
// listen for click event on video
video.addEventListener("click", playPauseVideo);
// listen for play event on video and update icon
video.addEventListener("play", updateIcons);
// listen for pause event on video and update icon
video.addEventListener("pause", updateIcons);
// listen for timeupdate(as video moes forward) event on video
video.addEventListener("timeupdate", updateProgress);
// listen for click event on play and pause buttons
play.addEventListener("click", playPauseVideo);
// listen for stop event on video and update icon
stopbtn.addEventListener("click", stopVideo);
progress.addEventListener("change", updateVideoProgress);
volume.addEventListener("change", updateVolume);
video.addEventListener("volumechange", updateAudio);
//additonal things to add (check events of video player) e.g "ended,ratechange,volumechange,autoplay"
