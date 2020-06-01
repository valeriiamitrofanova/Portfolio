//    MENU STARTS
const burger = document.querySelector(".burger");
const navBar = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll(".nav-bar a");

burger.addEventListener("click", () => {
  // TOGGLER
  navBar.classList.toggle("nav-active");
  // BURGER ANIMATION
  burger.classList.toggle("toggle");
});
// MENU ENDS

// PROJECT SLIDER STARTS
const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextBtn = document.querySelector(".btn-right");
const prevBtn = document.querySelector(".btn-left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// ARRANGE SLIDES NEXT TO EACH OTHER
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px";
});
// FUNCTIONALITY FOR SLIDES
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current");
  targetSlide.classList.add("current");
};
const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current");
  targetDot.classList.add("current");
};
const hideArrows = (slides, prevBtn, nextBtn, targetIndex) => {
  if (targetIndex === 0) {
    prevBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  } else if (targetIndex === slides.length - 1) {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  } else {
    prevBtn.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
  }
};
// ACTIVATE LEFT BUTTON CLICK TO MOVE SLIDES
prevBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideArrows(slides, prevBtn, nextBtn, prevIndex);
});
// ACTIVATE RIGHT BUTTON CLICK TO MOVE SLIDES
nextBtn.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideArrows(slides, prevBtn, nextBtn, nextIndex);
});
// ACTIVATE DOTS
dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");

  if (!targetDot) return;
  const currentSlide = track.querySelector(".current");
  const currentDot = dotsNav.querySelector(".current");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideArrows(slides, prevBtn, nextBtn, targetIndex);
});

// jQuery
$("#sendMail").on("click", function () {
  var email = $("#email").val().trim();
  var name = $("#name").val().trim();
  var message = $("#message").val().trim();

  if (name == "") {
    $("#errorMess").text("Please, enter your name");
    return false;
  } else if (email == "") {
    $("#errorMess").text("Please, enter your email");
    return false;
  } else if (message == "") {
    $("#errorMess").text("Please, enter your message");
    return false;
  }

  $("#errorMess").text("");

  $.ajax({
    url: "/mail.php",
    type: "POST",
    cache: false,
    data: { name: name, email: email, message: message },
    dataType: "html",
    beforeSend: function () {
      $("#sendMail").prop("disabled", true);
    },
    success: function (data) {
      if (!data) alert("Ooops, something went wrong:(");
      else $("#mailForm").trigger("reset");
      $("#sendMail").prop("disabled", false);
    },
  });
});
