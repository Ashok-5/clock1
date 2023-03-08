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