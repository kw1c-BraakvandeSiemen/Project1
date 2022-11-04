/*
    Auteur:         <Siemen van de Braak>
    Aanmaakdatum:   <28-10-2021>

    praktijk project  Javascript homepage
*/

//cookie klikbaar maken
const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector(".buttons button");

//cookie klikken functie geven
acceptBtn.onclick = ()=>{
    console.log("Cookies geaccepteerd");
    //cookie slaat nu op voor 1 dag daarna expired hij
    document.cookie = "CookieBy=Siemen; max-age="+60*60*24;
    if(document.cookie){ //verbegt cookie
         cookieBox.classList.add("hide"); //verbergt pop up zodra de cookie set is 
    }else{
        cookieBox.classList.add("hide"); //verbergt pop up zodra geklikt maar zal fout melding naar console schrijven als de cookie niet set is
        console.log ("Cookies konden niet geaccepteerd worden");
    }
}




