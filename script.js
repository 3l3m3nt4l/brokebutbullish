const launchDate = new Date("March 23, 2026 18:00:00").getTime();

const timer = setInterval(function(){

const now = new Date().getTime();

const distance = launchDate - now;

const days = Math.floor(distance/(1000*60*60*24));
const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
const minutes = Math.floor((distance%(1000*60*60))/(1000*60));
const seconds = Math.floor((distance%(1000*60))/1000);

document.getElementById("countdown").innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s";

if(distance < 0){

clearInterval(timer);

document.getElementById("countdown").innerHTML="LAUNCHED";

}

},1000);



function copyContract(){

const text = document.getElementById("contractAddress").innerText;

navigator.clipboard.writeText(text);

alert("Contract copied!");

}