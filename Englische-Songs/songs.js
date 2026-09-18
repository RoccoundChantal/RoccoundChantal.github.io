// Songliste für dieses Genre
const songs = [
Alle Menschen sind bald Brüder_engl.mp3
Am liebsten bin ich glücklich_engl.mp3
Bald wird alles gut_engl.mp3
Bevor die Welt im Feuer steht_engl.mp3
Bleib bei mir_engl.mp3
Blumen suchen die Sonne_engl.mp3
Bist du allein schöne Lady_engl.mp3
Brennendes Herz-Country-Pop-Ballade_engl.mp3
Chef dieser Welt_engl.mp3
Country-Fieber hält mich wach_engl.mp3
Country-Lady_engl.mp3
Darling deine Augen leuchten_engl.mp3
Das Wunder der Liebe_engl.mp3
Dein Bild_engl.mp3
Der Country-Beat ist mein Zuhaus_engl.mp3
Der Country-Song lässt mich nicht los_engl.mp3
Der Highway ruft_engl.mp3
Der Himmel der uns kennt_engl.mp3
Der Himmel schickt Tränen_engl.mp3
Die Erde dreht sich_engl.mp3
Die Ferne ist mein Zuhaus_engl.mp3
Die kleinen Wunder_engl.mp3
Die Nacht hält uns fest_engl.mp3
Die Sehnsucht bleibt Duett_engl.mp3
Die Sonne scheint_engl.mp3
Die Welt ist einfach schön_engl.mp3
Du bist das Licht in meiner Nacht_engl.mp3
Du bist der Beat in mir_engl.mp3
Du bist ein Lied in mir_engl.mp3
Du bist hier nicht allein_engl.mp3
Du bist mein Licht in meiner Nacht_engl.mp3
Du bist meine Welt_engl.mp3
Du bist wertvoll_engl.mp3
Du liebst mich_engl.mp3
Ein Duft der bleibt_engl.mp3
Ein Herz das von Liebe erzählt_engl.mp3
Ein Leben lang bei dir Duett_engl.mp3
Einsam sah ich dich stehn_engl.mp3
Es begann in Waging_engl.mp3
Ganz nahe bei dir_engl.mp3
Gegen den Sturm_60s_Rock'n'Roll_engl.mp3
Gedanken gehen auf die Reise F_engl.mp3
Glücklich sein für immer_Duett_engl.mp3
Große Gefühle tragen uns_engl.mp3
Habgier frisst die Heimat Erde_engl.mp3
Hände jetzt nach oben_engl.mp3
Heimweh-Liebe wohnt in dir_engl.mp3
Hör die Melodie von damals_engl.mp3
Ich hab dich verloren_engl.mp3
Ich halt dich fest in jeder Nacht_engl.mp3
Ich spüre das Leben_Duett_engl.mp3
Ich steh im Kreis der Flammen_engl.mp3
Ich steh zu dir_Duett_engl.mp3
Ich suche neue Wege_engl.mp3
Ich träumte vom Frieden_engl.mp3
Kein Traum ist zu groß_engl.mp3
Kinder rufen nach Liebe_engl.mp3
Knutschen will gelernt sein_engl.mp3
Körner aus Sand auf deiner Hand_engl.mp3
Kroatien wir grüßen dich_engl.mp3
Liebe Glück in Ewigkeit_engl.mp3
Liebe ohne Schmerzen_engl.mp3
Manchmal_engl.mp3
My High School Sweetheart_engl.mp3
My Lady Sonja_engl.mp3
Nachtgedanken_engl.mp3
Nur mit dir_Duett-Ballade_engl.mp3
Nur mit dirn F_engl.mp3
Odessa meine Heimat uk.mp3
Party im San Francisco_engl.mp3
Rock'n'Roll in unsrer Zeit_engl.mp3
Sag mir doch ob du mich liebst_engl.mp3
So leicht wie heut_engl.mp3
Sofort hast du mich elektrisiert_engl.mp3
Sommerherz_engl.mp3
Sommerliebe am Strand_engl.mp3
Sonja du bist alles_engl.mp3
Sonja mein Traum_engl.mp3
Sternenwind_engl.mp3
Tausche nicht die Sonne_engl.mp3
Traum meiner schlaflosen Nächte_engl.mp3
Unten am Strand – Soul‑Beach_engl.mp3
Unten in den Gassen_engl.mp3
Um die halbe Welt_engl.mp3
Und wieder ruf ich deinen Namen_engl.mp3
Vergessen hier Vergessen dort Rock'n'Roll_engl.mp3
Wahre Liebe geht nie verloren_engl.mp3
Warum nicht ich_engl.mp3
Weißt du den Weg zurück_engl.mp3
Weißt du wie heiß die Sehnsucht brennt_engl.mp3
Wenn du mich liebst küss mich_engl.mp3
Wenn man einander liebt_engl.mp3
Wie lange willst du glücklich sein_Duett_engl.mp3
Wieviel Tränen braucht das Leben_engl.mp3
Wilde Pferde ziehn mich heim_engl.mp3

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
