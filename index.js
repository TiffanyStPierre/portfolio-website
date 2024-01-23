const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const topButton = document.querySelector('.back-to-top');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

/*  Scroll to top button functionality  */

window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*  Collapsible project descriptions  */

const collapseList = document.getElementsByClassName('collapsible');

for (let i = 0; i < collapseList.length; i++) {
  collapseList[i].addEventListener("click", function() {
      this.classList.toggle("active");
      
      // Navigate up to the parent div containing both the button and project details
      const parentDiv = this.closest('.portfolio__item');
      const content = parentDiv.querySelector('.project-details');

      // Check if content is found
      if (content) {
          const computedStyle = window.getComputedStyle(content);

          if (computedStyle.display === "none" || computedStyle.visibility === "hidden") {
              content.style.display = "block";
              content.style.visibility = "visible";
          } else {
              content.style.display = "none";
              content.style.visibility = "hidden";
          }
      } else {
          console.error("Project details not found!");
      }
  });
}