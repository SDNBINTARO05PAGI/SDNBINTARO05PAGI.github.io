// Smooth Scroll JavaScript with offset
      document.querySelectorAll(".nav-links a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            const offset = document.querySelector(".top-blue-box").offsetHeight;
            const elementPosition =
              targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        });
      });

      // Slideshow JavaScript
      let slideIndex = 0;
      showSlides();

      function showSlides() {
        let slides = document.getElementsByClassName("slides");
        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove("active");
        }
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        slides[slideIndex - 1].classList.add("active");
        setTimeout(showSlides, 3000); // Ganti slide setiap 5 detik
      }
