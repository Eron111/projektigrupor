// JavaScript for slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

//JavaScript for the review section
var reviewIndex = 0;
showReviewSlides(reviewIndex);

function plusReviewSlides(n) {
  showReviewSlides(reviewIndex += n);
}

function showReviewSlides(n) {
  var i;
  var reviews = document.getElementsByClassName("review-slide");

  if (n >= reviews.length) {
    reviewIndex = 0;
  } else if (n < 0) {
    reviewIndex = reviews.length - 1;
  }

  for (i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }

  reviews[reviewIndex].style.display = "block";
}

// Auto cycle reviews every 5 seconds
setInterval(() => {
  plusReviewSlides(1);
}, 5000);




// JavaScript for modal
document.addEventListener('DOMContentLoaded', (event) => {
  const tosButton = document.getElementById('tos-button');
  const modal = document.getElementById('tos-modal');
  const closeButton = document.getElementsByClassName('close')[0];

  tosButton.onclick = function () {
    modal.style.display = 'block';
  }

  closeButton.onclick = function () {
    modal.style.display = 'none';
  }

  window.onclick = function (event) {
    if (event.target == moda) {
      modal.style.display = 'none';
    }
  }
});
