'use strict';

/*
Készíts egy függvényt, amely egy string-et kér paraméterként és
ellenőrzi, hogy a . írásjelek után az első betűk nagybetűk-e és
egy booleannel (logikai értékkel) tér vissza.
Példák:
grammarCheck("Ez egy jó példa. Ez egy jó példa.");
Amivel vissza kellene térnie: true
grammarCheck("ez még mindig egy jó példa. Hiszen a második mondat nagybetűvel kezdődik.");
Amivel vissza kellene térnie: true
grammarCheck("Ez egy rossz példa. itt nincs nagybetű.");
Amivel vissza kellene térnie: false
A függvény paramétereket direkt nem tettük a példakódba,
a te feladatod, hogy megadd a függvény paramétereket
*/

function grammarCheck(text) {
    return text.includes(text.match(/. [A-Z]+/g));
}

console.log(grammarCheck('Magni quis in dolorem libero voluptates numquam autem consectetur. Iusto autem ipsum aut rerum assumenda numquam omnis. Beatae voluptatem doloremque voluptatem id cumque qui. ipsa et unde et dolorem eum doloribus inventore dicta. optio amet nam voluptas voluptatum. tenetur laudantium asperiores. et cum labore sit et nesciunt veniam. ullam officiis voluptatibus eum. quod earum optio. qui ut commodi rem tempore.'));

// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ INNEN FELFELE LÉVŐ DOLGOKAT SZERKESZTHETED ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
// ------ EZT A SORT ÉS AMI EZ ALATT VAN AZT NE TÖRÖLD, NE MÓDOSÍTSD, EZ ALÁ A SOR ALÁ NE ÍRJ SEMMIT,
// ------ KÜLÖNBEN NEM FOG MŰKÖDNI AZ ELLENŐRZŐ ÉS AUTOMATIKUSAN 0%-ot fog adni -----------

module.exports = grammarCheck;
