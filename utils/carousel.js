// export function initCarousel() {
//   const heroSection = document.querySelector(".hero-section");
//   const slides = document.querySelectorAll(".slide");
//   const nextBtn = document.getElementById("nextSlide");
//   const prevBtn = document.getElementById("prevSlide");

//   if (!heroSection || !slides.length || !nextBtn || !prevBtn) {
//     console.warn("Carousel: Element not found in DOM");
//     return;
//   }

//   let currentIndex = 0;

//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       slide.classList.toggle("active", i === index);
//     });

//     if (index === 1) {
//       heroSection.classList.add("bg-slide-2");
//     } else {
//       heroSection.classList.remove("bg-slide-2");
//     }
//   }

//   nextBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   });

//   prevBtn.addEventListener("click", () => {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   });

//   showSlide(currentIndex);
// }

// utils/carousel.js
export function initCarousel() {
  try {
    const heroSection = document.querySelector('.hero-section');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('nextSlide');
    const prevBtn = document.getElementById('prevSlide');

    if (!heroSection || !slides.length || !nextBtn || !prevBtn) {
      console.warn("Carousel: Required elements not found in DOM");
      return null;
    }

    let currentIndex = 0;
    let intervalId = null;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });

      heroSection.classList.toggle('bg-slide-2', index === 1);
    }

    function handleNext() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
      resetAutoPlay();
    }

    function handlePrev() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
      resetAutoPlay();
    }

    function setupAutoPlay() {
      intervalId = setInterval(handleNext, 5000);
    }

    function resetAutoPlay() {
      if (intervalId) {
        clearInterval(intervalId);
      }
      setupAutoPlay();
    }

    // Initialize event listeners
    nextBtn.addEventListener('click', handleNext);
    prevBtn.addEventListener('click', handlePrev);

    // Initialize autoplay
    setupAutoPlay();

    // Show initial slide
    showSlide(currentIndex);

    // Return cleanup function
    return function cleanup() {
      if (intervalId) {
        clearInterval(intervalId);
      }
      nextBtn.removeEventListener('click', handleNext);
      prevBtn.removeEventListener('click', handlePrev);
    };
  } catch (error) {
    console.error("Carousel initialization error:", error);
    return null;
  }
}
