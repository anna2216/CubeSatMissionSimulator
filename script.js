let battery = 100;

function updateBattery(){

document.getElementById("battery").innerHTML=battery+"%";

document.getElementById("batteryBar").value=battery;

}
let seconds=0;

setInterval(function(){

seconds++;

document.getElementById("timer").innerHTML=seconds+" s";

},1000);

function log(message){
    let li = document.createElement("li");
    li.innerHTML = message;
    document.getElementById("log").appendChild(li);
}

function takeImage(){
    battery -= 10;
    updateBattery();
    log("📷 Earth image captured");
}

function collectData(){
    battery -= 5;
    updateBattery();
    log("🌡 Temperature data collected");
}

function transmit(){
    battery -= 15;
    updateBattery();
    log("📡 Data transmitted");
}
setInterval(function(){

let random=Math.random();

if(random>0.5){

document.getElementById("signal").innerHTML="🟢 Connected";

}else{

document.getElementById("signal").innerHTML="🔴 No Signal";

}

},4000);