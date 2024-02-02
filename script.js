const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
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

const aboutTitle = document.getElementById('about');
const aboutBox = document.querySelector('.about-box');
const experienceTitle = document.getElementById('experience');
const experienceBox = document.querySelector('.experience-box');
const projectTitle = document.getElementById('projects');
const projectBox = document.querySelector('.project-box');
const customCursor = document.querySelector('.custom-cursor');
const aboutNav = document.querySelector('.nav-about');
const experienceNav = document.querySelector('.nav-experience');
const projectsNav = document.querySelector('.nav-projects');

const aboutBoxEnterListener = function () {
  aboutTitle.style.transform = 'scale(1.03) translateY(-20%)';
  experienceTitle.style.transform = 'scale(1.03) translateY(-20%)';
  projectTitle.style.transform = 'scale(1.03) translateY(-20%)';
  aboutTitle.style.backgroundColor = '#385464';
  aboutTitle.style.boxShadow = '#ffffff99 0px 0px 8px';
};

const aboutBoxLeaveListener = function () {
  aboutTitle.style.transform = '';
  experienceTitle.style.transform = '';
  projectTitle.style.transform = '';
  aboutTitle.style.backgroundColor = '';
  aboutTitle.style.boxShadow = '';
};

const aboutNavEnterListener = function () {
  aboutTitle.style.transform = 'scale(1.03) translateY(-20%)';
  experienceTitle.style.transform = 'scale(1.03) translateY(-20%)';
  projectTitle.style.transform = 'scale(1.03) translateY(-20%)';
  aboutTitle.style.backgroundColor = '#385464';
  aboutTitle.style.boxShadow = '#ffffff99 0px 0px 8px';
  aboutBox.style.transform = 'scale(1.03)';
  experienceBox.style.transform = 'scale(1.03)';
  projectBox.style.transform = 'scale(1.03)';
  aboutBox.style.backgroundColor = '#34F5C515';
};

const aboutNavLeaveListener = function () {
  aboutTitle.style.transform = '';
  experienceTitle.style.transform = '';
  projectTitle.style.transform = '';
  aboutTitle.style.backgroundColor = '';
  aboutTitle.style.boxShadow = '';
  aboutBox.style.transform = '';
  experienceBox.style.transform = '';
  projectBox.style.transform = '';
  aboutBox.style.backgroundColor = '';
};

const experienceBoxEnterListener = function () {
  customCursor.style.border = '3px solid #1DCDFE';
  customCursor.style.boxShadow = '0px 0px 150px 100px #1DCDFE50';
  experienceTitle.style.transform = 'scale(1.03) translateY(-20%)';
  aboutTitle.style.transform = 'scale(1.03) translateY(-20%)';
  projectTitle.style.transform = 'scale(1.03) translateY(-20%)';
  experienceTitle.style.backgroundColor = '#30526B';
  experienceTitle.style.boxShadow = '#ffffff99 0px 0px 8px';
};

const experienceBoxLeaveListener = function () {
  customCursor.style.border = '';
  customCursor.style.boxShadow = '';
  experienceTitle.style.transform = '';
  aboutTitle.style.transform = '';
  projectTitle.style.transform = '';
  experienceTitle.style.backgroundColor = '';
  experienceTitle.style.boxShadow = '';
  experienceBox.style.transform = '';
  experienceBox.style.backgroundColor = '';
};

const experienceNavEnterListener = function () {
  experienceTitle.style.transform = 'scale(1.03) translateY(-20%)';
  aboutTitle.style.transform = 'scale(1.03) translateY(-20%)';
  projectTitle.style.transform = 'scale(1.03) translateY(-20%)';
  experienceTitle.style.backgroundColor = '#30526B';
  experienceTitle.style.boxShadow = '#ffffff99 0px 0px 8px';
  experienceBox.style.transform = 'scale(1.03)';
  aboutBox.style.transform = 'scale(1.03)';
  projectBox.style.transform = 'scale(1.03)';
  experienceBox.style.backgroundColor = '#1DCDFE15';
};

const experienceNavLeaveListener = function () {
  experienceTitle.style.transform = '';
  aboutTitle.style.transform = '';
  projectTitle.style.transform = '';
  experienceTitle.style.backgroundColor = '';
  experienceTitle.style.boxShadow = '';
  experienceBox.style.transform = '';
  aboutBox.style.transform = '';
  projectBox.style.transform = '';
  experienceBox.style.backgroundColor = '';
};

const projectBoxEnterListener = function () {
  customCursor.style.border = '3px solid #C19DFF';
  customCursor.style.boxShadow = '0px 0px 150px 100px #C19DFF50';
  projectTitle.style.transform = 'scale(1.03) translateY(-20%)';
  aboutTitle.style.transform = 'scale(1.03) translateY(-20%)';
  experienceTitle.style.transform = 'scale(1.03) translateY(-20%)';
  projectTitle.style.backgroundColor = '#3D4D6B';
  projectTitle.style.boxShadow = '#ffffff99 0px 0px 8px';
  projectBox.style.transform = 'scale(1.03)';
  projectBox.style.backgroundColor = '#C19DFF15';
};

const projectBoxLeaveListener = function () {
  customCursor.style.border = '';
  customCursor.style.boxShadow = '';
  projectTitle.style.transform = '';
  aboutTitle.style.transform = '';
  experienceTitle.style.transform = '';
  projectTitle.style.backgroundColor = '';
  projectTitle.style.boxShadow = '';
  projectBox.style.transform = '';
  projectBox.style.backgroundColor = '';
};

const projectsNavEnterListener = function () {
  projectTitle.style.transform = 'scale(1.03) translateY(-20%)';
  aboutTitle.style.transform = 'scale(1.03) translateY(-20%)';
  experienceTitle.style.transform = 'scale(1.03) translateY(-20%)';
  projectTitle.style.backgroundColor = '#3D4D6B';
  projectTitle.style.boxShadow = '#ffffff99 0px 0px 8px';
  projectBox.style.transform = 'scale(1.03)';
  aboutBox.style.transform = 'scale(1.03)';
  experienceBox.style.transform = 'scale(1.03)';
  projectBox.style.backgroundColor = '#1DCDFE15';
};

const projectsNavLeaveListener = function () {
  projectTitle.style.transform = '';
  aboutTitle.style.transform = '';
  experienceTitle.style.transform = '';
  projectTitle.style.backgroundColor = '';
  projectTitle.style.boxShadow = '';
  projectBox.style.transform = '';
  aboutBox.style.transform = '';
  experienceBox.style.transform = '';
  projectBox.style.backgroundColor = '';
};

const addEffectsFunc = function () {
  aboutBox.addEventListener('mouseenter', aboutBoxEnterListener);
  aboutBox.addEventListener('mouseleave', aboutBoxLeaveListener);
  aboutNav.addEventListener('mouseenter', aboutNavEnterListener);
  aboutNav.addEventListener('mouseleave', aboutNavLeaveListener);
  experienceBox.addEventListener('mouseenter', experienceBoxEnterListener);
  experienceBox.addEventListener('mouseleave', experienceBoxLeaveListener);
  experienceNav.addEventListener('mouseenter', experienceNavEnterListener);
  experienceNav.addEventListener('mouseleave', experienceNavLeaveListener);
  projectBox.addEventListener('mouseenter', projectBoxEnterListener);
  projectBox.addEventListener('mouseleave', projectBoxLeaveListener);
  projectsNav.addEventListener('mouseenter', projectsNavEnterListener);
  projectsNav.addEventListener('mouseleave', projectsNavLeaveListener);
};

addEffectsFunc();

window.addEventListener('resize', function () {
  if (window.innerWidth <= 1000) {
    aboutBox.removeEventListener('mouseenter', aboutBoxEnterListener);
    aboutBox.removeEventListener('mouseleave', aboutBoxLeaveListener);
    aboutNav.removeEventListener('mouseenter', aboutNavEnterListener);
    aboutNav.removeEventListener('mouseleave', aboutNavLeaveListener);
    experienceBox.removeEventListener('mouseenter', experienceBoxEnterListener);
    experienceBox.removeEventListener('mouseleave', experienceBoxLeaveListener);
    experienceNav.removeEventListener('mouseenter', experienceNavEnterListener);
    experienceNav.removeEventListener('mouseleave', experienceNavLeaveListener);
    projectBox.removeEventListener('mouseenter', projectBoxEnterListener);
    projectBox.removeEventListener('mouseleave', projectBoxLeaveListener);
    projectsNav.removeEventListener('mouseenter', projectsNavEnterListener);
    projectsNav.removeEventListener('mouseleave', projectsNavLeaveListener);
  } else {
    addEffectsFunc();
  }
});

// End Hover On Sections Effect //
