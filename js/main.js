var ElOpenBtn = document.querySelector(".site-header__btn--js-open");
var ElBodyScroll = document.querySelector("body")

ElOpenBtn.addEventListener("click", function () {
  ElOpenBtn.closest(".site-header").classList.toggle("site-nav__open");
  ElBodyScroll.classList.toggle("scroll");
});


$(".slider").slick({
  centerMode: true,
  centerPadding: "10px",
  slidesToShow: 3,
  variableWidth: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 1,
      },
    },
  ],
});


// const video = document.getElementById("myVideo");

// // Get the button
// const btn = document.getElementById("myBtn");

// // Pause and play the video, and change the button text
// function myFunction() {
//   if (video.paused) {
//     video.play();
//     btn.innerHTML = "Pause";
//   } else {
//     video.pause();
//     btn.innerHTML = "Play";
//   }
// }
