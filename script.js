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
const videoElem = document.createElement('video');
const acceptInputHandler = (obj) => {
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
}


// ------inc/dec the volume--------
const increaseVolume = () => {
    if (videoElem && videoElem.volume < 1 ){
        videoElem.volume = Math.min(1,videoElem.volume + 0.1 );
    }
}
const decreaseVolume = () => {
    if (videoElem && videoElem.volume > 0){
        videoElem.volume = Math.max(0,videoElem.volume - 0.1 );
    }
}
// ------inc/dec the Speed--------
const increaseSpeed = () => {
    videoElem.playbackRate = 5;
}
const decreaseSpeed = () => {
    videoElem.playbackRate = 0.5;
}

//browser call function
videoBtn.addEventListener('click',HandleInput);
videoInput.addEventListener('change',acceptInputHandler);
VolumeUp.addEventListener('click',increaseVolume);
VolumeDown.addEventListener('click',decreaseVolume);
SpeedUp.addEventListener('click',increaseSpeed);
SpeedDown.addEventListener('click',decreaseSpeed);