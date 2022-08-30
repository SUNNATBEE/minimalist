var ElOpenBtn = document.querySelector(".site-header__btn--js-open");
var ElBodyScroll = document.querySelector("body")

ElOpenBtn.addEventListener("click", function () {
  ElOpenBtn.closest(".site-header").classList.toggle("site-nav__open");
  ElBodyScroll.classList.toggle("scroll");
});
