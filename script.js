// Find all background markers

const markers = document.querySelectorAll(".background-marker");


// Watch for markers entering the reading area

const observer = new IntersectionObserver(

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
    /*
      The marker triggers when it reaches
      approximately the middle of the screen.
    */

    rootMargin: "-45% 0px -45% 0px",

    threshold: 0
  }

);


// Start watching all markers

markers.forEach((marker) => {

  observer.observe(marker);

});
