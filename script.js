

function animatedesc() {
  const desc = document.querySelectorAll('.desc-box');
  const windowHeight = window.innerHeight;

  desc.forEach(container => {
    const containerTop = container.getBoundingClientRect().top;

    if (containerTop < windowHeight) {
      container.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animatedesc);


function animateprojectsContainers() {
    const projectsContainers = document.querySelectorAll('.projects-container');
    const windowHeight = window.innerHeight;
  
    projectsContainers.forEach(container => {
      const containerTop = container.getBoundingClientRect().top;
  
      if (containerTop < windowHeight) {
        container.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', animateprojectsContainers);
  

function animateAboutContainers() {
    const aboutContainers = document.querySelectorAll('.about-container');
    const windowHeight = window.innerHeight;
  
    aboutContainers.forEach(container => {
      const containerTop = container.getBoundingClientRect().top;
  
      if (containerTop < windowHeight) {
        container.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', animateAboutContainers);
  

function changeLinkStyle(clickedLinkId) {
    var clickedLink = document.getElementById(clickedLinkId);
    clickedLink.style.color = "white";
    
    var allLinks = document.getElementsByTagName("a");
    for (var i = 0; i < allLinks.length; i++) {
      var link = allLinks[i];
      if (link.id !== clickedLinkId) {
        link.style.color = "";
      }
    }
  }
  
const projectsElement = document.getElementById('projects');

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2 
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const boxes = projectsElement.querySelectorAll('.box');
      boxes.forEach(box => box.classList.add('animate'));

      observer.unobserve(projectsElement);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(projectsElement);


