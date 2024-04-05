window.addEventListener('scroll', function() {
    var video = document.getElementById('ketamine-background-video');

    var scrollPosition = window.scrollY || this.window.pageYOffset;

    var startScroll = 0; // pos to start video playback
    var stopScroll = 1000; // pos to stop video playback

    if (scrollPosition >= startScroll && scrollPosition <=stopScroll) {
        video.play();
    } else {
        video.pause();
    }
});