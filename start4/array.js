var partenza = "Buenas Tardes";

let maiuscolo = partenza.toUpperCase();
console.log(maiuscolo); 

let minuscolo = partenza.toLowerCase();
console.log(minuscolo); 

let firstElement = maiuscolo.substring(0, 7);

let secondElement = minuscolo.substring(7, 13);

console.log(firstElement.concat(secondElement));

var persone = ["Giacomo", "Nicola", "Antonio", "Pasquale"];

let terzaPersona = persone[2];
console.log(terzaPersona);

var numeri = [10, 20, 30, 40, 50, 60, 70];

function etauno(age) {
    return age >= 21;
}
console.log(numeri.filter(etauno));

function etadue(age) {
    return age > 21;
}
console.log(numeri.some(etadue));

let cavia = ["Si Studia Tutti i Giorni"];

function aggiungo(){
cavia.push("Tranne", "Domenica");
console.log(cavia);}
aggiungo()

function rimuovo(){
cavia.pop();
console.log(cavia);}
rimuovo()

function rimuovo2(){
cavia.shift();
console.log(cavia);}
rimuovo2()

function aggiungo2(){
cavia.unshift("Basta", "Così");
console.log(cavia);}
aggiungo2()

const calcolaAnni = function(compleanno) {
    return 2022 - compleanno;
}
const anni = [1990, 2001, 2010, 1987, 2018];

const eta1 = calcolaAnni(anni[1]);
const eta2 = calcolaAnni(anni[0]);
const eta3 = calcolaAnni(anni[3]);
console.log(eta1, eta2, eta3);      // 21, 32, 35

const eta = [calcolaAnni(anni[1]), calcolaAnni(anni[0]), calcolaAnni(anni[3])];
console.log(eta);                   // [21, 32, 35]