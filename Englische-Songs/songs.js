// Songliste für dieses Genre
const songs = [
    "mp3-Dateien/Song1.mp3",
    "mp3-Dateien/Song2.mp3",
    "mp3-Dateien/Song3.mp3"
];

// Listelement aus der HTML holen
const list = document.getElementById("songlist");

// Jeden Song als Listeneintrag erzeugen
songs.forEach(song => {
    const li = document.createElement("li");

    // Dateiname ohne Ordner und ohne .mp3
    const title = song.split("/").pop().replace(".mp3", "");

    li.innerHTML = `
        <a href="${song}">${title}</a>
        <a href="${song}" download class="download-btn">Download</a>
    `;

    list.appendChild(li);
});
