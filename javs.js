
let budget = 100;
let productprijs = 60;
let saldo = document.getElementById("resultaat");

if(saldo => productprijs){
    let over = budget - productprijs;
    saldo.innerHTML = "u heeft genoeg! " + over + "is er over van : " + budget + "euro";
    saldo.style.color = "green";
}
else{saldo.innerHTML = "helaas u heeft te weining!";
saldo.style.color = "red";
   }
    