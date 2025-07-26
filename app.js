openmenu = () => {
    sidemenu.style.right = "0";
}
closemenu = () => {
    
    sidemenu.style.right = "-200px";
}

let moreProjects = document.querySelector(".moreProjects");
let seeMore = document.querySelector(".btn");
seeMore.addEventListener("click", () => {
    seeMore.style.display = "none";
    // moreProjects.setAttribute("class", "work-list");
    moreProjects.style.display = "grid";
    moreProjects.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    moreProjects.style.gap = "40px";
});

// Facilities reveal animation
window.addEventListener("scroll", () => {
  const facilities = document.querySelectorAll(".facility");

  facilities.forEach((facility) => {
    const img = facility.querySelector(".slide-img");
    const text = facility.querySelector(".facility-text");
    const rect = facility.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100 && !facility.classList.contains("animated")) {
      facility.classList.add("animated");

      // Start image animation
      img.style.transform = "translateX(100%) rotate(360deg)";

      // After image finishes animating, show text
      setTimeout(() => {
        text.style.opacity = "1";
        text.style.transform = "translateY(0)";
      }, 1000); // Matches CSS transition time of 1s
    }
  });
});
