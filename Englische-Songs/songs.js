const songs = [
    "Alles was ich bin.mp3",
    "Babylon du große Stadt.mp3",
    "Dein Geist berührt mich.mp3",
    "Die Neue Welt.mp3",
    "Die Wahrheit brennt_F, Remake.mp3",
    "Die Wahrheit brennt_M.mp3",
    "Du darfst das verstehn.mp3",
    "Du gibst Hoffnung.mp3",
    "Durch deinen Sohn.mp3"
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

