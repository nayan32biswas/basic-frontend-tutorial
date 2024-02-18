const videos = [
  {
    thumbnailSrc: "assets/thumbnails/thumbnail-1.webp",
    channelPictureSrc: "assets/channel-pictures/channel-1.jpeg",
    title: "Talking Tech and AI with Google CEO Sundar Pichai!",
    channelName: "Marques Brownlee",
    time: "14:20",
    views: "3.4M",
    published: "6 months ago",
  },
  {
    thumbnailSrc: "assets/thumbnails/thumbnail-2.webp",
    channelPictureSrc: "assets/channel-pictures/channel-2.jpeg",
    title: "Try Not To Laugh Challenge #9",
    channelName: "Markiplier",
    time: "8:22",
    views: "19M",
    published: "4 years ago",
  },
  {
    thumbnailSrc: "assets/thumbnails/thumbnail-3.webp",
    channelPictureSrc: "assets/channel-pictures/channel-3.jpeg",
    title: "Crazy Tik Toks Taken Moments Before DISASTER",
    channelName: "SSSniperWolf",
    time: "9:13",
    views: "12M",
    published: "1 year ago",
  },
  {
    thumbnailSrc: "assets/thumbnails/thumbnail-4.webp",
    channelPictureSrc: "assets/channel-pictures/channel-4.jpeg",
    title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
    channelName: "Veritasium",
    time: "22:09",
    views: "18M",
    published: "4 months ago",
  },
  {
    thumbnailSrc: "assets/thumbnails/thumbnail-5.webp",
    channelPictureSrc: "assets/channel-pictures/channel-5.jpeg",
    title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
    channelName: "CS Dojo",
    time: "11:17",
    views: "519K",
    published: "5 years ago",
  },
  {
    thumbnailSrc: "assets/thumbnails/thumbnail-6.webp",
    channelPictureSrc: "assets/channel-pictures/channel-6.jpeg",
    title: "Anything You Can Fit In The Circle I’ll Pay For",
    channelName: "MrBeast",
    time: "19:59",
    views: "141M",
    published: "1 year ago",
  },
];

const videoContainer = document.getElementById("video-container");

videos.forEach((video) => {
  const innerHtml = `
    <div class="thumbnail-row">
        <img class="thumbnail" src="${video.thumbnailSrc}" />
        <div class="video-time">${video.time}</div>
    </div>
    <div class="video-info-grid">
        <div class="channel-picture">
            <img class="profile-picture" src="${video.channelPictureSrc}"/>
        </div>
        <div class="video-info">
            <p class="video-title">${video.title}</p>
            <p class="video-author">${video.channelName}</p>
            <p class="video-stats">${video.views} views &#183; ${video.published}</p>
        </div>
    </div>
  `;

  const videoPreviewDiv = document.createElement("div");
  videoPreviewDiv.classList.add("video-preview");
  videoPreviewDiv.innerHTML = innerHtml;
  videoContainer.appendChild(videoPreviewDiv);
});
