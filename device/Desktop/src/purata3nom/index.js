
function kirapurata(){

var nom1 = window.prompt("Please type in a number (1/3)");
  if (nom1 === "" || isNaN(nom1)){
  window.alert("Prompt Cancelled. Null");
  return;
 }
 
var nom2 = window.prompt("Please type in a number (2/3)");
  if (nom2 === "" || isNaN(nom2)){
  window.alert("Prompt Cancelled. Null");
  return;
 }
 
var nom3 = window.prompt("Please type in a number (3/3)");
  if (nom3 === "" || isNaN(nom3)){
  window.alert("Prompt Cancelled. Null");
  return;
 }

nom1 = parseInt(nom1);
nom2 = parseInt(nom2);
nom3 = parseInt(nom3);
    
var purata = (nom1 + nom2 + nom3 / 3);
window.alert("Average number is: " + purata);
    
}
