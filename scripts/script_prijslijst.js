/*
    Auteur:         <Timo Corstjens>
    Aanmaakdatum:   <02-11-2021>

    praktijk project  Javascript prijslijst
*/

var age = prompt ("hoe oud ben je?");
document.getElementById("printAge").innerHTML = age;

if (age > 10)
{

  document.getElementById("Take").innerHTML = "Als u een kind heeft t/m 10 jaar kunt u uw kind laten knippen met korting!"
}
else
{
  document.getElementById("Young").innerHTML = "Kind t/m 10 jaar €10";
}
