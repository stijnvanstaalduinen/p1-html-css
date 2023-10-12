function veranderkleur(kleur)
{   
 document.getElementById("kop1").style.color = kleur;
}
function verandertekst(tekst)
{
   document.getElementById("kop1").innerHTML = "welkom"
}
function calculate()
{
let getal1 = prompt("geef getal 1", "");
let getal2 = prompt("geef getal 2", "");
antwoord = getal1 + getal2;
console.log(antwoord);
document.write("de som is:" + getal1 + "+" + getal2 + "=" + antwoord);
}