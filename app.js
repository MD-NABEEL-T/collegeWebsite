openmenu = () => {
    sidemenu.style.right = "0";
    document.querySelector(".visit-link").style.display = "none"; // hide button

}
closemenu = () => {
      document.querySelector(".visit-link").style.display = "block"; //show button
    sidemenu.style.right = "-200px";
}
// Close menu after clicking 
document.querySelectorAll("#sidemenu li a").forEach(link => {
  link.addEventListener("click", () => {
    closemenu(); 
  });
});

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
opentab = (event,tabname) =>{
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");

const scriptURL = 'https://script.google.com/macros/s/AKfycbwV0kzBdoZU8OpiTB2dvtZTriHvuIYIyK5LIZ9Ox43ZsJi_RTlRc_QKXo_Q2i0IkAFeGQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  });

let msg=document.querySelector("#msg");

let moreProjects = document.querySelector(".moreProjects");
moreProjects.style.display="none";
let seeMore = document.querySelector(".btn");
seeMore.addEventListener("click", () => {
    seeMore.style.display = "none";
    moreProjects.style.display = "grid";
    moreProjects.style.gridTemplateColumns = "repeat(auto-fit, minmax(300px, 1fr))";
    moreProjects.style.gap = "40px";
});

// Facilities reveal animation
  const facilities = document.querySelectorAll('.facility');

  const revealOnScroll = () => {
    facilities.forEach(facility => {
      const rect = facility.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        facility.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

let submitbutton =document.querySelector("#submitbutton");
submitbutton.addEventListener("click", () => {
    submitbutton.style.backgroundColor = "white";
    submitbutton.style.color = "black";
    submitbutton.innerText = "Submitted";
    msg.innerText="Thanks for the feedback";
});

