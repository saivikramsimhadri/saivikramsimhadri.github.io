document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("name");
  const names = ["Mobile Gamer", "Web Developer", "Gym Freak"];
  let currentIndex = 0;

  setInterval(function () {
    currentIndex = (currentIndex + 1) % names.length;
    nameElement.textContent = names[currentIndex];
  }, 2000); // Change content every 2 seconds (2000 milliseconds)
});

function myFunction() {
  var x = document.getElementById("topnav");
  if (!x.className.includes("responsive")) {
    x.className += " responsive";
  } else {
    x.className = "nav topnav";
  }
}
