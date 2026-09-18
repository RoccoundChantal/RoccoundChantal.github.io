// Liest automatisch alle MP3-Dateien aus dem Unterordner "mp3-Dateien"

fetch("mp3-Dateien/")
    .then(response => response.text())
    .then(html => {
        // MP3-Dateien aus dem Ordner extrahieren
        const regex = /href="([^"]+\.mp3)"/g;
        const songs = [];
        let match;

        while ((match = regex.exec(html)) !== null) {
            songs.push(match[1]);
        }

        const list = document.getElementById("songlist");

        songs.forEach(song => {
            const li = document.createElement("li");
            const title = song.replace(".mp3", "");

            li.innerHTML = `
                <a href="mp3-Dateien/${song}">${title}</a>
                <a href="mp3-Dateien/${song}" download class="download-btn">Download</a>
            `;

            list.appendChild(li);
        });
    })
    .catch(err => {
        console.error("Fehler beim Laden der MP3-Dateien:", err);
    });
