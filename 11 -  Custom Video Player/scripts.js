// Get our Elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
// console.log("file: scripts.js ~ line 5 ~ video", video)
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
// console.log("file: scripts.js ~ line 8 ~ progressBar", progressBar)
const playPause_Btn = player.querySelector('.player__button');
const skipBtns = player.querySelectorAll('[data-skip]');
const skipBtn_Backward = player.querySelectorAll('button[data-skip="-10"]');
const skipBtn_Forward = player.querySelectorAll('button[data-skip="25"]');
const ranges = player.querySelectorAll('.player__slider');

const fullScreenBtn =  player.querySelector('.fullScreenBtn');



// Build our functions

    // function that either call a play or a pause activity / function
    function togglePlay() {
        if(video.paused) {
            video.play()
            // playPause_Btn.textContent = '❚ ❚';
        } else {
            video.pause();
            // playPause_Btn.textContent = '►';
        }
        // using es6 ternary operator
        // const method =  video.paused ? 'play' : 'pause';
        // video[method]()
    }


    // independant methode : make button icon view play or pause depend on the fatc the video is paused or not a
    // and not on the click or not
    function changePlayerPauseBtn () {
        // console.log('changePlayerPauseBtn function')
        // const icon = video.paused ? '►' : '❚ ❚';
        const icon = this.paused ? '►' : '❚ ❚';
        playPause_Btn.textContent = icon;
    }

    function skipBack_or_For() {
        // console.log('skipBack_or_For function')
        console.log(this.dataset.skip); 
        video.currentTime += parseFloat(this.dataset.skip);
    }

    function handleRangeValue() {
        console.log(this.value)
        // if(this.name = 'volume') {
        //     video.volume = this.value
        //     console.log("file: scripts.js ~ line 54 ~ handleRangeValue ~ video.volume", video.volume)
        // } else if(this.name = 'playbackRate') {
        //     video.playbackRate = this.value
        //     console.log("file: scripts.js ~ line 59 ~ handleRangeValue ~ video.playbackRate", video.playbackRate)
        // }
        video[this.name] = this.value
    }

    function updateCurrentTimePlayBar () {
        // quand la video n est pas en pause ou quand on joue avaec les boutton data-skip la valeur de la largeur de la bar estegal au pourcenatge de de duration par rapport a currentTime
        // if(!video.paused) {
            progressBar.style.minWidth = `${video.currentTime/(video.duration/100)}%`
            // console.log("file: scripts.js ~ line 67 ~ updateCurrentTimePlayBar ~ progressBar.style.minWidth", progressBar.style.minWidth)
        // }
    }

    function scrub(e) {
        // console.log(e)
        // console.log(e.offsetX )
        // console.log(progress.offsetWidth/100)
        const scrubX_LocationinPercenatage = ( e.offsetX/(progress.offsetWidth/100)) 
        // console.log("file: scripts.js ~ line 74 ~ scrub ~ scrubX_LocationinPercenatage", scrubX_LocationinPercenatage)
        progressBar.style.minWidth = `${scrubX_LocationinPercenatage}%`
        video.currentTime = (scrubX_LocationinPercenatage* video.duration/100) 
        // console.log("file: scripts.js ~ line 79 ~ scrub ~ video.currentTime", video.currentTime)
        // console.log("file: scripts.js ~ line 75 ~ scrub ~ progressBar.style.minWidth", progressBar.style.minWidth)
    }

let fullscreen = false

function openFullscreen() {
  if (player.requestFullscreen) {
    player.requestFullscreen();
  } else if (player.webkitRequestFullscreen) { /* Safari */
    player.webkitRequestFullscreen();
  } else if (player.msRequestFullscreen) { /* IE11 */
    player.msRequestFullscreen();
  }

fullscreen = true
}

function closeFullscreen() {
    console.log('closeFullscreen function run')
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }

  fullscreen = false
}


// Hook up the event listenners

video.addEventListener('click', togglePlay);
playPause_Btn.addEventListener('click', togglePlay)
video.addEventListener('play',changePlayerPauseBtn );
video.addEventListener('pause',changePlayerPauseBtn );
skipBtns.forEach(item => item.addEventListener('click', skipBack_or_For ));
ranges.forEach(item => item.addEventListener('click', handleRangeValue))

video.addEventListener('timeupdate', updateCurrentTimePlayBar);


// flag variable to hendle the mousemove event
let mousedown = false 


progress.addEventListener('mousedown', () => { mousedown = true});
progress.addEventListener('mouseup', () => { mousedown = false}) 
progress.addEventListener('mousemove' , (e) => {
    if(mousedown) {
        scrub(e)
    }
})
// progress.addEventListener('mousemove' , (e) => { mousedown && scrub(e)})
progress.addEventListener('click', scrub)

fullScreenBtn.addEventListener('click', openFullscreen);
fullScreenBtn.addEventListener('click', () => {fullscreen && closeFullscreen()})

