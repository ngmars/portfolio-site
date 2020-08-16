
 /* The text */
/* The speed/duration of the effect in milliseconds */
var i = 0;
var txt = 'Hey Guess Who';
var speed = 50; 
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}