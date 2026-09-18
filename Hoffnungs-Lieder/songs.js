// Hoffnungslieder – komplette Liste
const songs = [
    "../txt/Ein Leben hier in Überfluss.mp3",
    "../txt/Ein Volk ein Herz.mp3",
    "../txt/Ein Volk ein Herz_Remake.mp3",
    "../txt/Eine neue Erde.mp3",
    "../txt/Eine Welt voll Liebe.mp3",
    "../txt/Es ist dein Geist.mp3",
    "../txt/Es kommt die Zeit.mp3",
    "../txt/Es strahlt ein Licht.mp3",
    "../txt/Es träumte mir nie mehr Krieg.mp3",
    "../txt/Hoffnung in der Dunkelheit.mp3",
    "../txt/Ich klammer mich an dich.mp3",
    "../txt/Ich sehe Blumen und Wälder.mp3",
    "../txt/Ich verliere nicht den Mut_Remake.mp3",
    "../txt/Ich will ein Freund von Jehova sein.mp3",
    "../txt/Im Herzen weit werden.mp3",
    "../txt/Im Herzen weit werden_engl.mp3",
    "../txt/Kein Land wird schöner sein.mp3",
    "../txt/Keine Trauertränen mehr_Duett.mp3",
    "../txt/Leben im Paradies.mp3",
    "../txt/Leben im Paradies_engl.mp3",
    "../txt/Leben jetzt in Ewigkeit.mp3",
    "../txt/Liebe bleibt_Hymnische Ballade.mp3",
    "../txt/Liebe bleibt_Hymnische Ballade_engl.mp3",
    "../txt/Liebe geben_F-M.mp3",
    "../txt/Mach alles neu Jehova.mp3",
    "../txt/Manchmal_F_Remake.mp3",
    "../txt/Manchmal_engl.mp3",
    "../txt/Manchmal_M_Remake.mp3",
    "../txt/Manchmal_RocknRoll.mp3",
    "../txt/Mein Lied für Mama.mp3",
    "../txt/Oh Neue Welt.mp3",
    "../txt/Paradies-Song.mp3",
    "../txt/Preiset Gott Jehova.mp3",
    "../txt/Rose vom Sharon.mp3",
    "../txt/Siegeslied.mp3",
    "../txt/Siehst du dich selbst im Paradies.mp3",
    "../txt/Tamburin und E-Gitarre.mp3",
    "../txt/Tausend Jahre weit.mp3",
    "../txt/Trolley-Song.mp3",
    "../txt/Wer hat all das Schöne erdacht.mp3",
    "../txt/Wer hat all das Schöne erdacht_engl.mp3",
    "../txt/Wer sieht noch Hoffnungslicht.mp3",
    "../txt/Wie lang oh Gott.mp3",
    "../txt/Wie viele Jahre bis zum Paradies_Walzer.mp3",
    "../txt/Wieviel Jahre bis zum Paradies.mp3",
    "../txt/Wir geben Liebe_Duett.mp3",
    "../txt/Wir glauben an Wunder.mp3",
    "../txt/Wir lieben die Wahrheit.mp3",
    "../txt/Wir singen vom Frieden.mp3",
    "../txt/Wir singen vom Frieden_engl.mp3",
    "../txt/Wir stehen zusammen.mp3",
    "../txt/Wir stehen zusammen_engl.mp3",
    "../txt/Wir tragen dein Licht.mp3",
    "../txt/Wir wünschen uns Frieden.mp3",
    "../txt/Zeit zum Träumen.mp3",
    "../txt/Zuversichtlich.mp3"
];

// Liste erzeugen
const list = document.getElementById("songlist");

songs.forEach(song => {
    const li = document.createElement("li");
    const title = song.split("/").pop().replace(".mp3", "");

    li.innerHTML = `
        <a href="${song}">${title}</a>
        <a href="${song}" download class="download-btn">Download</a>
    `;
    list.appendChild(li);
});
