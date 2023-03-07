const secNdl=document.querySelector(".sec");
const minNdl=document.querySelector(".min");
const hrsNdl=document.querySelector(".hrs");
function rotate(){
    const date = new Date();
    const secs = date.getSeconds();
    const secdeg = ((secs / 60) * 360) + 90;
}