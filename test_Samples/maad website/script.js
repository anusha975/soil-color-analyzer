setInterval(()=>{

document.getElementById("temp").innerText =
Math.floor(Math.random()*10+25)+"°C";

document.getElementById("hum").innerText =
Math.floor(Math.random()*30+50)+"%";

document.getElementById("energy").innerText =
Math.floor(Math.random()*200+300)+" kWh";

},2000);