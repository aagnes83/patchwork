'use strict';

/*
Készíts egy függvényt, amely három string-et (karakterláncot) kér paraméterként
és egy string-gel tér vissza. Az első string (`text`) az a szöveg, amit a
függvénynek meg kell majd változtatnia. A második string (`originalWord`)
lesz az, amit minden előfordulása során a harmadik string-re (`newWord`)
kell megváltoztatni, majd a függvénynek az eredménnyel visszatérnie.
Fontos, hogy nem használhatod egyik beépített helyettesítő függvényt sem!
Példa:
censor("A kedvenc gyümölcsöm a(z) alma", "alma", "banán");
Amivel vissza kellene térnie: `"A kedvenc gyümölcsöm a(z) banán"`.
A függvény paramétereket direkt nem tettük a példakódba,
a te feladatod, hogy megadd a függvény paramétereket
*/

function censor(text, originalWord, newWord) {
    let splittedText = text.split(' ');
    splittedText = splittedText.map(word => {
        if (word === originalWord) { 
            return newWord;
        }
        return word;
    });
    return splittedText.join(' ');
}

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ INNEN FELFELE LÉVŐ DOLGOKAT SZERKESZTHETED ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ------ EZT A SORT ÉS AMI EZ ALATT VAN AZT NE TÖRÖLD, NE MÓDOSÍTSD, EZ ALÁ A SOR ALÁ NE ÍRJ SEMMIT,
// ------ KÜLÖNBEN NEM FOG MŰKÖDNI AZ ELLENŐRZŐ ÉS AUTOMATIKUSAN 0%-ot fog adni -----------

module.exports = censor;
