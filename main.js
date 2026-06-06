/* STEM by Sophia — shared interactions
   Mobile nav toggle, dropdown (mobile), and scroll-reveal animations. */
(function () {
  "use strict";

  // Mobile menu toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Dropdown: hover on desktop (CSS), tap-to-open on mobile
  var dd = document.querySelector(".has-dropdown");
  var ddTrigger = document.querySelector(".dropdown-trigger");
  if (dd && ddTrigger) {
    ddTrigger.addEventListener("click", function (e) {
      e.preventDefault();
      if (window.matchMedia("(max-width: 980px)").matches) {
        dd.classList.toggle("open");
      }
    });
  }

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { obs.observe(el); });
  }
})();
