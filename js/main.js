var ElOpenBtn = document.querySelector(".site-header--js-open");

ElOpenBtn.addEventListener("click", function () {
  ElOpenBtn.closest(".site-header").classList.toggle("site-nav__open");
});
