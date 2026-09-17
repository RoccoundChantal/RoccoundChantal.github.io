const songs = [
  
];

const list = document.getElementById("songlist");

songs.forEach(song => {
    const li = document.createElement("li");
    const title = song.replace(".mp3", "");

    li.innerHTML = `
        <a href="${song}">${title}</a>
        <a href="${song}" download class="download-btn">Download</a>
    `;

    list.appendChild(li);
});

