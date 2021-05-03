// toggle navbar

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav() {
  navToggler.classList.toggle("active");
  document.querySelector(".nav").classList.toggle("open");
}

// close nav when clicking on links
document.addEventListener("click", function (e) {
  if (e.target.closest(".nav-item")) {
    toggleNav();
  }
});

// sticky header
window.addEventListener("scroll", function () {
  if (this.pageYOffset > 60) {
    document.querySelector(".header").classList.add("sticky");
  } else {
    document.querySelector(".header").classList.remove("sticky");
  }
});

// services tabs

const serviceTabs = document.querySelector(".service-tabs");
serviceTabs.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("service-tab-item") &&
    !e.target.classList.contains("active")
  ) {
    const target = e.target.getAttribute("data-target");
    serviceTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const serviceSection = document.querySelector(".service-section");
    serviceSection
      .querySelector(".service-tab-content.active")
      .classList.remove("active");
    serviceSection.querySelector(target).classList.add("active");
  }
});
