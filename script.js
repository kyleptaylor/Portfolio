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

// Tilt Effect //

let constrain = 1100;
let mainBody = document.getElementById("tilt-backlayer");
let tiltLayers = document.querySelectorAll(".tilt-layer");

mainBody.addEventListener('mousemove', function(e) {
  tiltLayers.forEach(layer => {
    let box = layer.getBoundingClientRect();
    let xy = [e.clientX, e.clientY];
    let calcX = -(xy[1] - box.y - (box.height / 2)) / constrain;
    let calcY = (xy[0] - box.x - (box.width / 2)) / constrain;

    if (layer.contains(e.target)) {
      layer.style.transform = "scale(1.03) "
        + "perspective(150px) "
        + "rotateX(" + calcX + "deg) "
        + "rotateY(" + calcY + "deg)";
    } else {
      layer.style.transform = ''; 
    }
  });
});

// End Tilt Effect //

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
const overlay = document.querySelector('.overlay');
const blobs = document.querySelectorAll('.blob')

const aboutBoxEnterListener = function () {
  aboutTitle.style.transform = 'scale(1.03) translateY(-20%)';
  aboutTitle.style.backgroundColor = '#385464';
  aboutTitle.style.boxShadow = '#ffffff99 0px 0px 8px';
  overlay.style.opacity = '1';
  aboutBox.style.zIndex = '4';
  aboutTitle.style.zIndex = '4';
  blobs.forEach(blob => {
    blob.style.background = '#34F5C525';
  });
};

const aboutBoxLeaveListener = function () {
  aboutTitle.style.transform = '';
  aboutTitle.style.backgroundColor = '';
  aboutTitle.style.boxShadow = '';
  overlay.style.opacity = '';
  aboutBox.style.zIndex = '';
  aboutTitle.style.zIndex = '';
  blobs.forEach(blob => {
    blob.style.background = '';
  });
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
  customCursor.style.boxShadow = '0px 0px 100vw 10vw #1DCDFE50';
  experienceTitle.style.transform = 'scale(1.03) translateY(-20%)';
  experienceTitle.style.backgroundColor = '#30526B';
  experienceTitle.style.boxShadow = '#ffffff99 0px 0px 8px';
  overlay.style.opacity = '1';
  experienceBox.style.zIndex = '4';
  experienceTitle.style.zIndex = '4';
  blobs.forEach(blob => {
    blob.style.background = '#1DCDFE30';
  });
};

const experienceBoxLeaveListener = function () {
  customCursor.style.boxShadow = '';
  experienceTitle.style.transform = '';
  experienceTitle.style.backgroundColor = '';
  experienceTitle.style.boxShadow = '';
  experienceBox.style.transform = '';
  experienceBox.style.backgroundColor = '';
  overlay.style.opacity = '';
  experienceBox.style.zIndex = '';
  experienceTitle.style.zIndex = '';
  blobs.forEach(blob => {
    blob.style.background = '';
  });
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
  customCursor.style.boxShadow = '0px 0px 100vw 10vw #C19DFF50';
  projectTitle.style.transform = 'scale(1.03) translateY(-20%)';
  projectTitle.style.backgroundColor = '#3D4D6B';
  projectTitle.style.boxShadow = '#ffffff99 0px 0px 8px';
  projectBox.style.transform = 'scale(1.03)';
  projectBox.style.backgroundColor = '#C19DFF20';
  overlay.style.opacity = '1';
  projectBox.style.zIndex = '4';
  projectTitle.style.zIndex = '4';
  blobs.forEach(blob => {
    blob.style.background = '#C19DFF25';
  });
};

const projectBoxLeaveListener = function () {
  customCursor.style.boxShadow = '';
  projectTitle.style.transform = '';
  projectTitle.style.backgroundColor = '';
  projectTitle.style.boxShadow = '';
  projectBox.style.transform = '';
  projectBox.style.backgroundColor = '';
  overlay.style.opacity = '';
  projectBox.style.zIndex = '';
  projectTitle.style.zIndex = '';
  blobs.forEach(blob => {
    blob.style.background = '';
  });
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
  projectBox.style.backgroundColor = '#C19DFF15';
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

const removeEffectsFunc = function () {
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
};

const handleWindowResize = function () {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 1000) {
    removeEffectsFunc();
  } else {
    addEffectsFunc();
  }
};

handleWindowResize();

window.addEventListener('resize', handleWindowResize);

// End Hover On Sections Effect //

const partyModeCheckbox = document.getElementById('party-mode');

partyModeCheckbox.addEventListener('change', function () {
    if (partyModeCheckbox.checked) {
        const backgroundDiv = document.createElement("div");
        backgroundDiv.classList.add("background");
        for (let i = 0; i < 8; i++) {
            const blobDiv = document.createElement("div");
            blobDiv.classList.add("blob");
            backgroundDiv.appendChild(blobDiv);
        }
        document.body.appendChild(backgroundDiv);
    } else {
        const backgroundDiv = document.querySelector(".background");
        if (backgroundDiv) {
            document.body.removeChild(backgroundDiv);
        }
    }
});