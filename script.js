
const hoverWords = document.querySelectorAll(".hover-word");

hoverWords.forEach(word => {

  if (word.querySelector(".hover-popup")) {
    return;
  }

  if (word.dataset.info) {
    const popup = document.createElement("span");

    popup.className = "hover-popup";
    popup.textContent = word.dataset.info;

    word.appendChild(popup);
  }

});


const sections = document.querySelectorAll(".page-section");

const sectionObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        sections.forEach((section) => {
          section.classList.remove("active");
        });

        entry.target.classList.add("active");

      }

    });

  },

  {
    threshold: 0.5
  }

);


sections.forEach((section) => {
  sectionObserver.observe(section);
});


const markers = document.querySelectorAll(".background-marker");

function updateBackground() {
  let currentBackground = "#f8f7f3";

  markers.forEach((marker) => {
    const markerPosition = marker.getBoundingClientRect().top;
    const triggerPosition = window.innerHeight * 0.5;

    if (markerPosition <= triggerPosition) {
      const background = marker.dataset.background;

      if (background === "gray") {
        currentBackground = "#b2beb5";
      }

      if (background === "red") {
        currentBackground = "#f73718";
      }
    }
  });

  document.body.style.backgroundColor = currentBackground;
}

window.addEventListener("scroll", updateBackground);

updateBackground();
