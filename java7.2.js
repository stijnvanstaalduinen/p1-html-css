function hoeveelheid()
{

let product = 100;
let budget = prompt("hoeveel geld heeft u?", 0);

let resultP = document.getElementById("resultparagraph");
if (product >= budget){
   resultP.innerHTML = "helaas, niet genoeg geld";
   resultP.style.color ="red";
}
else{
    resultP.innerHTML = "u heeft genoeg geld!";
    resultP.style.color ="green";
}
}