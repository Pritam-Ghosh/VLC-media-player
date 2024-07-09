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
    const selectedVideo = obj.target.files[0];
// src -> BASE64
const link = URL.createObjectURL(selectedVideo);
const videoElem = document.createElement('video');
videoElem.src = link;
videoElem.setAttribute('class','video')
videoElem.muted = true;
videoElem.autoplay = true;
// videoElem.loop = true;
videoElem.controls = true;
videoPlayer.appendChild(videoElem);
// videoElem.style.height = "100%";
videoElem.play();

// inc/dec the volume
// inc/dec speed of video

}



//browser call function
videoBtn.addEventListener('click',HandleInput);
videoInput.addEventListener('change',acceptInputHandler);
videoElem.addEventListener('click')