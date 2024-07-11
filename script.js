const SpeedUp = document.querySelector('#SpeedUp');
const SpeedDown = document.querySelector('#SpeedDown');
const VolumeUp = document.querySelector('#VolumeUp');
const VolumeDown = document.querySelector('#VolumeDown');
const videoBtn = document.querySelector('#videoBtn');
const videoInput = document.querySelector('#videoInput');
const videoPlayer = document.querySelector('#main');




const HandleInput = () =>{
    videoInput.click();
    
}

const acceptInputHandler = (obj) => {
    const videoElem = document.createElement('video');
    const selectedVideo = obj.target.files[0];
// src -> BASE64
const link = URL.createObjectURL(selectedVideo);
videoElem.src = link;
videoElem.setAttribute('class','video')
// videoElem.muted = true;
// videoElem.autoplay = true;
// videoElem.loop = true;
videoElem.controls = true;
videoPlayer.appendChild(videoElem);
// videoElem.style.height = "100%";
// videoElem.play();
videoElem.volume  = 0.3;
}
// ------inc/dec the Speed--------
const SpeedUpHandler = () => {
    const videoElem = document.querySelector('video');
    if (videoElem == null) {
        return;
    }
    if(videoElem.playbackRate > 3){
    return;
    }
    const increaseSpeed = videoElem.playbackRate + 0.5;
    videoElem.playbackRate = increaseSpeed;
    console.log(increaseSpeed)
}
const SpeedDownHandler = () => {
    const videoElem = document.querySelector('video');
    if (videoElem == null) {
        return;
        }
        if(videoElem.playbackRate > 0){
            const decreaseSpeed = videoElem.playbackRate - 0.5;
            videoElem.playbackRate = decreaseSpeed;
            console.log(decreaseSpeed)
            }           
}

// ------inc/dec the volume--------
const  VolumeUpHandler = () => {
    const videoElem = document.querySelector('video');
    if (videoElem == null) {
        return;
        }
        if (videoElem.volume > 0.99) {
            return;
            }
        videoElem.volume=videoElem.volume + 0.1;
        console.log(videoElem.volume);
}
const  VolumeDownHandler = () =>{
    const videoElem = document.querySelector('video');
    if (videoElem == null) {
        return;
        }
        if (videoElem.volume <= 0.1) {
            return videoElem.volume = 0;
            }
            videoElem.volume=videoElem.volume - 0.1;
            console.log(videoElem.volume);
}

//browser call function
videoBtn.addEventListener('click',HandleInput);
videoInput.addEventListener('change',acceptInputHandler);
SpeedUp.addEventListener('click',SpeedUpHandler);
SpeedDown.addEventListener('click',SpeedDownHandler);
VolumeUp.addEventListener('click',VolumeUpHandler);
VolumeDown.addEventListener('click',VolumeDownHandler);