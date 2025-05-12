
document.getElementById("nav-trigger-link").addEventListener("click", function() {
  // Toggle the "hidden" class on the main container to hide/show its content
  document.querySelector(".main").classList.toggle("hidden");
  // Toggle the "show" class on the "site-bottom" element to show/hide it
  document.querySelector(".site-bottom").classList.toggle("show");
  document.querySelector(".nav").classList.toggle("show");
  document.querySelector(".container").classList.toggle("show");
  document.querySelector(".w-layout-grid nav__grid").classList.toggle("show");
  
});
