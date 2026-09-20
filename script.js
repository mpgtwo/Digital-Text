// -----------------------------
// HOVER WORDS / POPUPS
// -----------------------------

const hoverWords = document.querySelectorAll(".hover-word");

hoverWords.forEach(word => {

  // If a popup already exists inside the word,
  // leave it alone.
  if (word.querySelector(".hover-popup")) {
    return;
  }

  // Otherwise, create a popup from data-info.
  if (word.dataset.info) {
    const popup = document.createElement("span");

    popup.className = "hover-popup";
    popup.textContent = word.dataset.info;

    word.appendChild(popup);
  }

});


// -----------------------------
// SECTION BACKGROUND CHANGES
// -----------------------------

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


// Start watching each section

sections.forEach((section) => {
  sectionObserver.observe(section);
});


// -----------------------------
// SCROLL-BASED BACKGROUND COLORS
// -----------------------------

const markers = document.querySelectorAll(".background-marker");

const backgroundObserver = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        const background = entry.target.dataset.background;

        if (background === "pink") {
          document.body.style.backgroundColor = "#fce4ec";
        }

        if (background === "blue") {
          document.body.style.backgroundColor = "#e5f1f8";
        }

      }

    });

  },

  {
    rootMargin: "-45% 0px -45% 0px",
    threshold: 0
  }

);


// Start watching the background markers

markers.forEach((marker) => {
  backgroundObserver.observe(marker);
});
