const SpeedUp = document.querySelector('#SpeedUp');
const SpeedDown = document.querySelector('#SpeedDown');
const VolumeUp = document.querySelector('#VolumeUp');
const VolumeDown = document.querySelector('#VolumeDown');
const videoBtn = document.querySelector('#videoBtn');
const videoInput = document.querySelector('#videoInput');

const VideoPlayer = document.querySelector('#main')

const HandleInput = () =>{
    videoInput.click();
    
}

const acceptInputHandler = (obj) => {
    const selectVideo = obj.target.files[0];
    const videoElement = document.createElement('video');
    videoElement.src = link;
    videoElement.setAttribute('class','video');
    videoElement.controls="true";
    VideoPlayer.appendChild(videoElement);
    videoElement.play();
}
videoBtn.addEventListener('click',HandleInput);
videoInput.addEventListener('change',acceptInputHandler);
