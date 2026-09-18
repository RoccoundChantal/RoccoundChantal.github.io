// Songliste für dieses Genre
const songs = [
    "../txt/Alle Menschen sind bald Brüder_engl.mp3",
    "../txt/Am liebsten bin ich glücklich_engl.mp3",
    "../txt/Bald wird alles gut_engl.mp3",
    "../txt/Bevor die Welt im Feuer steht_engl.mp3",
    "../txt/Bleib bei mir_engl.mp3"
];

// Listelement aus der HTML holen
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

