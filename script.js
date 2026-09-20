const hoverWords = document.querySelectorAll(".hover-word");

hoverWords.forEach(word => {
  const popup = document.createElement("span");

  popup.className = "hover-popup";
  popup.textContent = word.dataset.info;

  word.appendChild(popup);
});


const sections = document.querySelectorAll(".page-section");


const observer = new IntersectionObserver(

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
  observer.observe(section);
});
