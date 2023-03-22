const secNdl=document.querySelector('.sec');
const minNdl=document.querySelector('.min');
const hrsNdl=document.querySelector('.hrs');
const date = new Date();
const secs = date.getSeconds();
const mins = date.getMinutes();
const hour = date.getHours();

function rotation(){
    const secdeg = ((secs / 60) * 360) + 90;
    secNdl.style.transform=`rotate(${secdeg}deg)`

    const mindeg = ((mins / 60) * 360) + ((secs/60)*6) + 90;
    minNdl.style.transform=`rotate(${mindeg}deg)`

    const hourdeg = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hrsNdl.style.transform=`rotate(${hourdeg}deg)`
}
setInterval(rotation,1000);
rotation();
function updateClock() {
    hour = (hour < 10 ? "0" : "") + hour;
    mins = (mins < 10 ? "0" : "") + mins;
    secs = (secs < 10 ? "0" : "") + secs;
  
    let time = hour + ":" + mins + ":" + secs;
  
    document.querySelector("dg_clk").innerHTML = time;
  }
  
  updateClock();
  setInterval(updateClock, 1000);