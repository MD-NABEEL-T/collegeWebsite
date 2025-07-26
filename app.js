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
window.addEventListener("scroll", function () {
  const facilities = document.querySelectorAll(".facility");
  facilities.forEach((facility) => {
    const rect = facility.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      facility.classList.add("show");
    }
  });
});
