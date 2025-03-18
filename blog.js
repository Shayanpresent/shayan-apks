const videoList = [
    {
        title: "SP EDITOR NEW FIXTURE REVEAL 😏",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_1/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=VIDEO_ID_1",
        views: "1.6K views",
        daysAgo: "4 days ago"
    },
    {
        title: "SP EDITOR | HALF REVIEW | DOWNLOAD NOW",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_2/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=VIDEO_ID_2",
        views: "2.7K views",
        daysAgo: "6 days ago"
    },
    {
        title: "SP EDITOR COMING 😏 SQUAD, JERSEY, GAME...",
        thumbnail: "https://i.ytimg.com/vi/VIDEO_ID_3/hqdefault.jpg",
        link: "https://www.youtube.com/watch?v=VIDEO_ID_3",
        views: "1.9K views",
        daysAgo: "10 days ago"
    }
];

const videoContainer = document.getElementById("video-list");

videoList.forEach(video => {
    const videoCard = document.createElement("div");
    videoCard.classList.add("video-card");

    videoCard.innerHTML = `
        <a href="${video.link}" target="_blank">
            <img src="${video.thumbnail}" class="thumbnail">
        </a>
        <div class="video-info">
            <p class="video-title">${video.title}</p>
            <p class="video-meta">${video.views} • ${video.daysAgo}</p>
        </div>
    `;

    videoContainer.appendChild(videoCard);
});