(() => {
  // Toggle Navigation Bar function
  function toggleNavbar() {
    navbar.classList.toggle("active");
  }

  // Navigation anchors
  const anchorTags = document.querySelectorAll("#navbar ul li");
  // Navigation anchors container
  const navbar = document.querySelector("#navbar ul");
  anchorTags.forEach(li => { li.addEventListener("click", toggleNavbar) });
  document.querySelector(".burger").addEventListener("click", toggleNavbar);
})();