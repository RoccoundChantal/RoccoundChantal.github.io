// Songliste für dieses Genre
const songs = [
    "../mp3-Dateien/Alle Menschen sind bald Brüder_engl.mp3",
    "../mp3-Dateien/Am liebsten bin ich glücklich_engl.mp3",
    "../mp3-Dateien/Bald wird alles gut_engl.mp3",
    "../mp3-Dateien/Bevor die Welt im Feuer steht_engl.mp3",
    "../mp3-Dateien/Bleib bei mir_engl.mp3"
];

// Listelement aus der HTML holen – ID MUSS zu HTML passen!
const list = document.getElementById("songlist");

// Jeden Song als Listeneintrag erzeugen
songs.forEach(song => {
    const li = document.createElement("li");

    const title = song.split("/").pop().replace(".mp3", "");

    li.innerHTML = `
        <a href="${song}">${title}</a>
        <a href="${song}" download class="download-btn">Download</a>
    `;

    list.appendChild(li);
});
