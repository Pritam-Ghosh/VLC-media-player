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
const currentTimeElem = document.querySelector('#currentTime');
const endTime = document.querySelector('#endTime');
const forwardBtn = document.querySelector('#forwardBtn');
const backwardBtn = document.querySelector('#backwardBtn');
const stopBtn = document.querySelector('#stopBtn');
const seekBar = document.querySelector('#seekBar');

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
// videoElem.controls = true;
videoPlayer.innerHTML = '';
// --------------------------> Reset button states when a new video is loaded
play.style.display = 'inline-block'; // Show the play button
pause.style.display = 'none'; // Hide the pause button

videoPlayer.appendChild(videoElem);
// videoElem.style.height = "100%";
// videoElem.play();
videoElem.volume  = 0.3;


//Time Update & Total time
 videoElem.addEventListener('timeupdate', () => {
        const videoTime = timeFormat(videoElem.currentTime); // Display current time in seconds
        currentTimeElem.innerHTML = videoTime;

        // Update the seek bar position
    const seekBarValue = (videoElem.currentTime / videoElem.duration) * 100;
    seekBar.value = seekBarValue;
    });

    videoElem.addEventListener('loadedmetadata', () => {
        const duration = timeFormat(videoElem.duration); // Display duration in seconds
        endTime.innerText = duration;
    });


}

//conversertion time
const timeFormat = (timeCount) => {
    let time = '';
    const sec = parseInt(timeCount, 10);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec - (hours * 3600)) / 60);
    let seconds = sec - (hours * 3600) - (minutes * 60);
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    time = `${hours}:${minutes}:${seconds}`;
    return time;
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
        const percentage = Math.round(increaseVolume*100) + '%'; 
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
        const percentage = Math.round(decreaseVolume*100) + '%'; 
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
        play.style.display = 'none'; // Hide play button
    pause.style.display = 'inline-block'; // Show pause button
        } else {
            videoElem.pause();
            play.style.display = 'inline-block'; // Show play button
            pause.style.display = 'none'; // Hide pause button

            }         
           
            play.style.margin = 'auto';
}

const pauseBtn = () => {
    const videoElem = document.querySelector('video');
    if (videoElem.paused) {
        videoElem.play();
        play.style.display = 'none'; // Hide play button
    pause.style.display = 'inline-block'; // Show pause button
        } else {
            videoElem.pause();
            play.style.display = 'inline-block'; // Show play button
            pause.style.display = 'none'; // Hide pause button
            }
            pause.style.position = "relative"
}


// forward/backward 

function forward(){
    const videoElem = document.querySelector('video');
    const forwardToast = videoElem.currentTime += 5;
    videoElem.currentTime = forwardToast;
    console.log(videoElem.currentTime);
    showToast('Forward 5s ' + timeFormat(forwardToast));
}

function backward(){
    const videoElem = document.querySelector('video');
     backwardToast = videoElem.currentTime -= 5;
     videoElem.currentTime = backwardToast
    console.log(videoElem.currentTime);
    showToast('Backward 5s ' + timeFormat(backwardToast));
}

const stopHandler = () => {
    const videoElem = document.querySelector('video');
    if(videoElem){    
        videoElem.currentTime = 0;
        videoElem.remove();
        currentTimeElem.innerText = '00.00'
        endTime.innerText = '00.00'
        play.style.display = 'inline-block';
        pause.style.display = 'none';
    }  
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
forwardBtn.addEventListener('click',forward);
backwardBtn.addEventListener('click',backward);
stopBtn.addEventListener('click',stopHandler);

//Seekbar
seekBar.addEventListener('input', () => {
    const videoElem = document.querySelector('video');
    if (videoElem) {
        const seekValue = seekBar.value;
        videoElem.currentTime = (seekValue / 100) * videoElem.duration;
    }
});
