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

  // Format hours, minutes, and seconds to ensure they
  // display two digits.
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Build the clock as a string, e.g. "hh:mm:ss".
  var timeString = hours + ":" + minutes + ":" + seconds;

  // Update the clock's display.
  document.querySelector(".dg_clk").innerHTML = timeString;
}

// Update the clock every second.
setInterval(updateClock, 1000);
