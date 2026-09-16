document.addEventListener("DOMContentLoaded", () => {
    const songs = document.querySelectorAll(".songlist li");

    songs.forEach(song => {
        const date = song.getAttribute("data-date");
        if (!date) return;

        const added = new Date(date);
        const now = new Date();

        const diffDays = (now - added) / (1000 * 60 * 60 * 24);

        if (diffDays <= 28) {
            const neuTag = document.createElement("span");
            neuTag.textContent = "neu";
            neuTag.style.color = "red";
            neuTag.style.marginLeft = "10px";
            neuTag.style.fontWeight = "bold";
            song.appendChild(neuTag);
        }
    });
});

