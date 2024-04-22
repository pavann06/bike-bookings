document.addEventListener("DOMContentLoaded", function() {
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  console.log(testimonialCards);
  console.log(prevButton);
  console.log(nextButton);

  let currentIndex = 0;
  const maxIndex = testimonialCards.length - 1;

  function showCards() {
    testimonialCards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + 3) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function showNextCards() {
    if (currentIndex + 3 <= maxIndex) {
      currentIndex += 3;
      showCards();
    }
  }

  function showPrevCards() {
    if (currentIndex - 3 >= 0) {
      currentIndex -= 3;
      showCards();
    }
  }

  prevButton.addEventListener("click", showPrevCards);
  nextButton.addEventListener("click", showNextCards);

  showCards();
});
