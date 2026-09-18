// Songliste für dieses Genre
<style>
    body {
        background-color: #222;
        color: #eee;
        font-family: Arial, sans-serif;
    }

    #songlist {
        list-style: none;
        padding: 0;
        margin: 20px;
    }

    #songlist li {
        margin: 4px 0;        /* kompakter */
        padding: 6px 10px;    /* angenehme Höhe */
        background: #333;     /* dunkler Block */
        border-radius: 4px;
    }

    #songlist a {
        color: #ffd700;       /* goldene Links wie deine Typografie */
        text-decoration: none;
        margin-right: 12px;
    }

    #songlist a:hover {
        text-decoration: underline;
    }

    .download-btn {
        color: #fff;
        background: #555;
        padding: 3px 8px;
        border-radius: 3px;
    }

    .download-btn:hover {
        background: #777;
    }
</style>


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

