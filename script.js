let play = document.getElementById('play');
let setting = document.getElementById('settings');
let aboutus = document.getElementById('aboutus');
play.addEventListener('click', function  () {
  play.style.transform = "translateY(-800%)";
  setting.style.transform = "translateX(-800%)";
  aboutus.style.transform = "translateY(1000%)";
  
});
function btndisappeare(){
  play.style.display = "none";
  setting.style.display = "none";
  aboutus.style.display = "none";
}