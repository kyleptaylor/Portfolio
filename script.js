const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    var target = this.getAttribute("href");
    var targetElement = document.querySelector(target);

    // Check if the target element exists
    if (targetElement) {
      // Reset scroll position
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Scroll to the target element
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Name Wave Effect //

window.addEventListener('load', function () {
    const nameSpanElements = [...document.querySelectorAll('h1.hover-text span')];
    const titleSpanElements = [...document.querySelectorAll('h2.hover-text span')];

    const delayBetweenSpans = 50;
    
    function applyWaveEffectToSpanElements(elements) {
      elements.forEach(function (span, index) {
          setTimeout(function () {
              span.classList.add('hover-effect');
              
              setTimeout(function () {
                  span.classList.remove('hover-effect');
              }, 400);
          }, index * delayBetweenSpans);
      });
      
      // Now Reverse //

      const initialAnimationDuration = elements.length * delayBetweenSpans + 400;

      setTimeout(function () {
        elements.slice().reverse().forEach(function (span, index) {
          setTimeout(function () {
              span.classList.add('hover-effect');
              
              setTimeout(function () {
                  span.classList.remove('hover-effect');
              }, 400);
          }, index * delayBetweenSpans);
        });
      }, initialAnimationDuration);
    }

    applyWaveEffectToSpanElements(nameSpanElements);
    applyWaveEffectToSpanElements(titleSpanElements);

    // Run Function on Click //

    const headerBox = document.querySelector('.header-box')
    headerBox.addEventListener('click', () => { 
      applyWaveEffectToSpanElements(nameSpanElements);
      applyWaveEffectToSpanElements(titleSpanElements);
    });
});


// End Name Wave Effect //

// Hover On Sections Effect //

document.addEventListener('DOMContentLoaded', function () {
  const aboutTitle = document.getElementById('about')
  const aboutBox = document.querySelector('.about-box');
  const experienceTitle = document.getElementById('experience')
  const experienceBox = document.querySelector('.experience-box');
  const projectTitle = document.getElementById('projects')
  const projectBox = document.querySelector('.project-box');
  const customCursor = document.querySelector('.custom-cursor');

  aboutBox.addEventListener('mouseenter', function (){
    if (window.matchMedia("(min-width: 1000px)").matches) {
      aboutTitle.style.transform = 'scale(1.03)';
      aboutTitle.style.backgroundColor = '#385464';
      aboutTitle.style.boxShadow = '#ffffff99 0px 0px 8px'
    }
  });

  aboutBox.addEventListener('mouseleave', function (){
    aboutTitle.style.transform = 'scale(1)';
    aboutTitle.style.backgroundColor = '';
    aboutTitle.style.boxShadow = ''
  });

  experienceBox.addEventListener('mouseenter', function () {
      customCursor.style.border = '3px solid #1DCDFE';
      customCursor.style.boxShadow = '0px 0px 150px 100px #1DCDFE50';
      
      if (window.matchMedia("(min-width: 1000px)").matches) {
        experienceTitle.style.transform = 'scale(1.03)';
        experienceTitle.style.backgroundColor = '#30526B';
        experienceTitle.style.boxShadow = '#ffffff99 0px 0px 8px'
      }
  });

  experienceBox.addEventListener('mouseleave', function () {
      experienceTitle.style.transform = 'scale(1)';
      customCursor.style.border = '';
      customCursor.style.boxShadow = '';
      experienceTitle.style.backgroundColor = '';
      experienceTitle.style.boxShadow = ''
  });

  projectBox.addEventListener('mouseenter', function () {
      customCursor.style.border = '3px solid #C19DFF';
      customCursor.style.boxShadow = '0px 0px 150px 100px #C19DFF50';

      if (window.matchMedia("(min-width: 1000px)").matches) {
        projectTitle.style.transform = 'scale(1.03)';
        projectTitle.style.backgroundColor = '#3D4D6B';
        projectTitle.style.boxShadow = '#ffffff99 0px 0px 8px'
      }
  });

  projectBox.addEventListener('mouseleave', function () {
      projectTitle.style.transform = 'scale(1)';
      customCursor.style.border = '';
      customCursor.style.boxShadow = '';
      projectTitle.style.backgroundColor = '';
      experienceTitle.style.boxShadow = ''
  });

});

// End Hover On Sections Effect //
