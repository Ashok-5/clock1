const secNdl=document.querySelector('.sec');
const minNdl=document.querySelector('.min');
const hrsNdl=document.querySelector('.hrs');

function rotation(){
    const date = new Date();
    const secs = date.getSeconds();
    const secdeg = ((secs / 60) * 360) + 90;
    secNdl.style.transform=`rotate(${secdeg}deg)`

    const mins = date.getMinutes();
    const mindeg = ((mins / 60) * 360) + ((secs/60)*6) + 90;
    minNdl.style.transform=`rotate(${mindeg}deg)`

    const hour = date.getHours();
    const hourdeg = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hrsNdl.style.transform=`rotate(${hourdeg}deg)`
}
setInterval(rotation,1000);
rotation();
function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    var time = hours + ":" + minutes + ":" + seconds;
  
    document.getElementById("#dg_clk").innerHTML = time;
  }
  
  updateClock();
  setInterval(updateClock, 1000);