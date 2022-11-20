function playVideo() {
    video_element.play();
}

function  pauseVideo() {
    video_element.pause()
}

function slowVideo() {
    if (video_speed == 1.0) {
        video_speed = 0.5;
    } else if (video_speed == 0.5) {
        window.alert('Video is at slowest speed!');
    } else if (video_speed == 2.0) {
        video_speed = 1.0;
    }
    
    video_element.playbackRate = video_speed;
}

function speedVideo() {
    if (video_speed == 1.0) {
        video_speed = 2.0;
    } else if (video_speed == 0.5) {
        video_speed = 1.0;
    } else if (video_speed == 2.0) {
        window.alert('Video is at fastest speed!');
    }
    
    video_element.playbackRate = video_speed;
}

function skipVideo() {
    current_time = video_element.currentTime; 
    video_duration = video_element.duration;
    
    if (current_time + 15.0 > video_duration) {
        video_element.currentTime = 0.0;
        video_element.pause();
    } else {
        video_element.currentTime = current_time + 15.0;
    }
}

function muteVideo() {
    if (muted == false) {
        muted = true;
        mute_button.textContent = "Unmute";
    } else {
        muted = false;
        mute_button.textContent = "Mute";
    }
    video_element.muted = muted;
}
function updateVol() {
    vol_indicator.innerHTML = slider.value; 
    video_element.volume = slider.value / 100.0;
}

var video_element = document.getElementById("videoplayer");
var play_button = document.getElementById("play");
var pause_button = document.getElementById("pause");
var slow_button = document.getElementById("slower");
var fast_button = document.getElementById("faster");
var skip_button = document.getElementById("skip");
var mute_button = document.getElementById("mute");
var slider = document.getElementById("slider");
var vol_indicator = document.getElementById("volume");

var video_speed = 1.0;
var muted = false;

video_element.autoplay = false;
video_element.loop = false;
vol_indicator.innerHTML = 100.0;


play_button.addEventListener("click", playVideo);
pause_button.addEventListener("click", pauseVideo);
slow_button.addEventListener("click", slowVideo);
fast_button.addEventListener("click", speedVideo);
skip_button.addEventListener("click", skipVideo);
mute_button.addEventListener("click", muteVideo);

slider.addEventListener("input", updateVol);

