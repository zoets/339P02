/* -------------------- JavaScript Code for Carousel ------------------------ */

// Variable to Control the changing of the slides
var slideIndex = 0;
// Name of function
showSlides();
//Function
function showSlides() {
  // Variable to keep track of array items
  var i;
  // Variable to fetch array of slides
  var slides = document.getElementsByClassName("mySlides");
  // Hiding all of the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // Increasing the slideIndex every 5 seconds
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  // Displaying only one slide at a time
  slides[slideIndex-1].style.display = "block";
  // Change image every 5 seconds
  setTimeout(showSlides, 5000);
}
