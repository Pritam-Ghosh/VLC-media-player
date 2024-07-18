const SpeedUp = document.querySelector('#SpeedUp');
const SpeedDown = document.querySelector('#SpeedDown');
const VolumeUp = document.querySelector('#VolumeUp');
const VolumeDown = document.querySelector('#VolumeDown');
const videoBtn = document.querySelector('#videoBtn');
const videoInput = document.querySelector('#videoInput');
const videoPlayer = document.querySelector('#main');
const toast = document.querySelector('.toast');
const fullscreen = document.querySelector('#fullscreen');
const play = document.querySelector('#play');
const pause = document.querySelector('#pause');

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
    // console.log(increaseSpeed);
    // toast.textContent = increaseSpeed + "X";
    // toast.style.display = 'block'
    // setTimeout(() => {
    //     toast.style.display = 'none'
    // },3000)
    showToast(increaseSpeed + 'X')
}
const SpeedDownHandler = () => {
    const videoElem = document.querySelector('video');
    if (videoElem == null) {
        return;
        }
        if(videoElem.playbackRate > 0){
            const decreaseSpeed = videoElem.playbackRate - 0.5;
            videoElem.playbackRate = decreaseSpeed;
            // console.log(decreaseSpeed)
            // toast.textContent = decreaseSpeed+ "X";
            // toast.style.display = 'block'
            // setTimeout(() => {
            //     toast.style.display = 'none'
            // },3000)
            showToast(decreaseSpeed + 'X')
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
        const increaseVolume =videoElem.volume + 0.1;
        // console.log(videoElem.volume);
        videoElem.volume = increaseVolume;
        const percentage = (increaseVolume*100) + '%'; 
        showToast(percentage);
        
}
const  VolumeDownHandler = () =>{
    const videoElem = document.querySelector('video');
    if (videoElem == null) {
        return;
        }
        if (videoElem.volume <= 0.1) {
             videoElem.volume = 0;
             return;
            }
            const decreaseVolume =videoElem.volume - 0.1;
            // console.log(videoElem.volume);

        videoElem.volume = decreaseVolume;
        const percentage = (decreaseVolume*100) + '%'; 
        showToast(percentage);
}

 showToast = (message) =>{
    toast.textContent = message;
    toast.style.display= 'block'
    setTimeout(() => {
        toast.style.display = 'none'
    },3000)
}

const fullscreenHandler = () =>{
    console.log('hello')
    videoPlayer.requestFullscreen();
}

const playBtn = () =>{
    const videoElem = document.querySelector('video');
    if (videoElem.paused) {
        videoElem.play();
        } else {
            videoElem.pause();
            }            
            play.style.display = 'none';
            pause.style.display = 'inline-block';
}

const pauseBtn = () => {
    const videoElem = document.querySelector('video');
    if (videoElem.paused) {
        videoElem.play();
        } else {
            videoElem.pause();
            }
            play.style.display = 'inline-block';
            pause.style.display = 'none';
            pause.style.position = "relative"
}
//browser call function
videoBtn.addEventListener('click',HandleInput);
videoInput.addEventListener('change',acceptInputHandler);
SpeedUp.addEventListener('click',SpeedUpHandler);
SpeedDown.addEventListener('click',SpeedDownHandler);
VolumeUp.addEventListener('click',VolumeUpHandler);
VolumeDown.addEventListener('click',VolumeDownHandler);
fullscreen.addEventListener('click',fullscreenHandler);
play.addEventListener('click',playBtn);
pause.addEventListener('click', pauseBtn);