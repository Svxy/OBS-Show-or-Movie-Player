document.addEventListener("DOMContentLoaded", () => {
    const videoPlayer = document.createElement("video");
    videoPlayer.autoplay = true;
    videoPlayer.controls = false;
    videoPlayer.setAttribute("playsinline", "");
    document.body.appendChild(videoPlayer);

    let currentVideoIndex = 1;
    const totalVideos = 33; // number of videos/episodes

    videoPlayer.addEventListener("ended", () => {
        if (currentVideoIndex < totalVideos) {
            currentVideoIndex++;
        } else {
            currentVideoIndex = 1;
        }
        const nextVideoFile = `./episodes/ep${currentVideoIndex}.mp4`;
        setTimeout(() => {
            videoPlayer.src = nextVideoFile;
        }, Math.floor(Math.random() * 7 + 8) * 1000); // waits 8-14 seconds before playing the next video/episode
    });

    const firstVideoFile = `./episodes/ep${currentVideoIndex}.mp4`;
    videoPlayer.src = firstVideoFile;
});