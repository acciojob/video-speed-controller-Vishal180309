// Get the video element
const video = document.querySelector('.player__video');

// Get the progress bar element
const progressBar = document.querySelector('.progress__filled');

// Get the play/pause button element
const playPauseButton = document.querySelector('.player__button');

// Get the rewind button element
const rewindButton = document.getElementById('rewind');

// Get the fast forward button element
const fastForwardButton = document.getElementById('fastForward');

// Get the volume slider element
const volumeSlider = document.getElementById('volume');

// Get the playback speed slider element
const playbackSpeedSlider = document.getElementById('playbackSpeed');

// Add event listener to the play/pause button
playPauseButton.addEventListener('click', () => {
    // Toggle play/pause
    video[video.paused ? 'play' : 'pause']();

    // Update the play/pause button icon
    playPauseButton.textContent = video.paused ? '' : '';
});

// Add event listener to the rewind button
rewindButton.addEventListener('click', () => {
    // Rewind the video by 10 seconds
    video.currentTime -= 10;
});

// Add event listener to the fast forward button
fastForwardButton.addEventListener('click', () => {
    // Fast forward the video by 25 seconds
    video.currentTime += 25;
});

// Add event listener to the volume slider
volumeSlider.addEventListener('input', () => {
    // Update the video volume
    video.volume = volumeSlider.value;
});

// Add event listener to the playback speed slider
playbackSpeedSlider.addEventListener('input', () => {
    // Update the video playback speed
    video.playbackRate = playbackSpeedSlider.value;
});

// Add event listener to the video
video.addEventListener('timeupdate', () => {
    // Update the progress bar
    const progress = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${progress}%`;
});