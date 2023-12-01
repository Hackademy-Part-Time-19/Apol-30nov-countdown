document.addEventListener("DOMContentLoaded", function () {
  let keri = document.getElementById("keri");
  let image = document.getElementById("myImage");
  let SetTempo = 5;

  var interval = setInterval(function () {
    SetTempo--;
    keri.innerHTML = SetTempo;
    if (SetTempo === 0) {
      image.style.display = "block";
      clearInterval(interval);
      document.getElementById("keri").innerHTML = "";
      document.getElementById("timer").innerHTML = "";

      setTimeout(function () {
        var currentImage = 1;
        var imageInterval = setInterval(function () {
          if (currentImage === 1) {
            image.src = "./imagini/vino.png";
          } else if (currentImage === 2) {
            image.src = "./imagini/founder.jpg";
          } else {
            clearInterval(imageInterval);
          }
          currentImage++;
        }, 3000);
      }, 3000);
    }
  }, 1000);
});


