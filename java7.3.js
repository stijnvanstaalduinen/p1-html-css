let getal = 0;
let getalp = document.getElementById("getal");
function optel(){
if (getal >= 10){
    getal = 0;
}
else{
   getal++;

}
getalp.innerHTML = getal.toString();


}