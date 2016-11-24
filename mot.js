var mot = prompt("Entrer un mot")

function reset(){
  var newMot = prompt("Entrer un nouveau mot !")
  document.getElementById("mot").innerHTML = newMot;
  document.getElementById('motMini').innerHTML = newMot.toLowerCase();
  document.getElementById('motMaj').innerHTML = newMot.toUpperCase();
}

document.getElementById('mot').innerHTML = mot;
document.getElementById('mot').style.fontWeight = "bold";
document.getElementById('mot').style.color = 'red';

document.getElementById('motMini').innerHTML = mot.toLowerCase();
document.getElementById('motMini').style.fontWeight = "normal";
document.getElementById('motMini').style.color = 'black';

document.getElementById('motMaj').innerHTML = mot.toUpperCase();
document.getElementById('motMaj').style.fontWeight = "normal";
document.getElementById('motMaj').style.color = 'black';

//--------------------------------------voyelles-----------------------------------//

var nbVoyelles = [];
var ctr = 0;

while (ctr <= mot.length){
if((mot[ctr] === 'a') || (mot[ctr] === 'e') || (mot[ctr] === 'i') ||(mot[ctr] === 'o') || (mot[ctr] === 'u') || (mot[ctr] === 'y')){
nbVoyelles.push(mot[ctr]);
}
ctr++;
}

document.getElementById('nbVoyelle').innerHTML = "Il y a " + nbVoyelles.length + " voyelles";

//-------------------------------Consonnes------------------------/

var motNoVoy = mot.split("a").join("");
    motNoVoy = motNoVoy.split("e").join("");
    motNoVoy = motNoVoy.split("i").join("");
    motNoVoy = motNoVoy.split("o").join("");
    motNoVoy = motNoVoy.split("u").join("");
    motNoVoy = motNoVoy.split("y").join("");

document.getElementById('nbConsonne').innerHTML = "Il y a " + motNoVoy.length + " consonnes";


//-----------------------------------Mot mélangé--------------------------//

// var motmodif = mot.replace(mot[0], mot[4]);
// motmodif = motmodif.replace(mot[1], mot[0]);
// motmodif = motmodif.replace(mot[2], mot[1]);
// motmodif = motmodif.replace(mot[3], mot[5]);
// motmodif = motmodif.replace(mot[4], mot[2]);
// motmodif = motmodif.replace(mot[5], mot[3]);


var motbis = mot;
var motmel ="";

for(var f =0; motmel.length < mot.length; f++){
  var num = Math.floor(Math.random()*motbis.length);
  motmel += motbis[num];
  motbis = motbis.slice(0,num) + motbis.slice(num+1);
}

console.log(motmel);
document.getElementById('melange').innerHTML = motmel;

//------------------------------Palindrome------------------------//

var inverse = mot.split("")
inverse = inverse.reverse();
inverse = inverse.join("")

if (mot == inverse) {
  document.getElementById('palindrome').innerHTML = mot + ", " + inverse + " = " + "Ce mot est un palindrome"
}
else{
  document.getElementById('palindrome').innerHTML = mot + ", " + inverse + " = " + "Ce mot n'est pas un palindrome"
}





































































// const countVowels = str => Array.from(str)
//   .filter(letter => 'aeiou'.includes(letter)).length;
//
//
// const countConsonant = str => Array.from(str)
//   .filter(letter => 'bcdfghjklmnpqrstvwxz'.includes(letter)).length;

// document.getElementById('nbConsonne').innerHTML = "Il y a " + countConsonant(mot) + " consonnes"
// document.getElementById('nbVoyelle').innerHTML = "Il y a " + countVowels(mot) + " voyelles"
