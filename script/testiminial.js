document.addEventListener('DOMContentLoaded', function() {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
  
    let currentIndex = 0;
  
    // Function to show the next set of testimonial cards
    function showNextTestimonials() {
      currentIndex += 3;
      if (currentIndex >= testimonialCards.length) {
        currentIndex = 0; // Loop back to the beginning if end is reached
      }
      updateTestimonials();
    }
  
    // Function to show the previous set of testimonial cards
    function showPrevTestimonials() {
      currentIndex -= 3;
      if (currentIndex < 0) {
        currentIndex = testimonialCards.length - 3; // Loop to the end if beginning is reached
      }
      updateTestimonials();
    }
  
    // Function to update the testimonial cards display
    function updateTestimonials() {
      testimonialsContainer.style.transform = `translateX(-${currentIndex * 25}%)`; // Move container to show next/prev cards
    }
  
    // Event listeners for navigation buttons
    prevButton.addEventListener('click', showPrevTestimonials);
    nextButton.addEventListener('click', showNextTestimonials);
  });
  