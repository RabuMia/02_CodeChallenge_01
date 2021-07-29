
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/
let ersteZahl, zweiteZahl, ergebnis;


ersteZahl = parseInt(prompt("Bitte geben Sie eine Zahl ein: "));
zweiteZahl = parseInt(prompt("Bitte geben sie eine zweite Zahl ein:"));
ergebnis = ersteZahl + zweiteZahl;
console.log(ersteZahl + " + " + zweiteZahl);
console.log("Die Summe der Zahlen ist: " + ergebnis);