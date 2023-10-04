document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.getElementById("name");
  const names = ["WEB DEVELOPER", "GYM GOER", "PHOTOGRAPHER"];
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

// SKILLS BAR
var bars = document.querySelectorAll(".progress-bar");
var options = {
  root: null,
  rootmargin: "0",
  threshold: 0.2,
};

var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.style.width = entry.target.getAttribute("data-width") + "%";
    observer.unobserve(entry.target);
  });
}, options);

bars.forEach((bar) => {
  observer.observe(bar);
});

var observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.style.opacity = 1;
    entry.target.style.top = 0;
    observer2.unobserve(entry.target);
  });
}, options);

var abouts = document.querySelectorAll(".lazy-load");

abouts.forEach((about) => {
  observer2.observe(about);
});

var parentNav = document.getElementById("parent-nav");

parentNav.onclick = function (evt) {
  var x = document.getElementById("topnav");
  if (
    x.className.includes("responsive") &&
    evt.target.className === "menu-item"
  ) {
    x.className = "nav topnav";
  }
};
