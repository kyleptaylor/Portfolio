// Down Arrow for All Projects //

const arrowDown = document.getElementById("arrow-down");

function handleScroll() {
  arrowDown.style.display = "none";
}

window.addEventListener("scroll", handleScroll);

// End Down Arrow for All Projects //

// Cursor and Blob Effect //

const cursor = document.querySelector(".custom-cursor");
const secretMessage = document.querySelector(".secret-message");
const blobs = document.querySelectorAll(".blob");

if (document.querySelector(".switch") && window.innerWidth > 1000) {
  const switchBox = document.querySelector(".switch");
  switchBox.addEventListener("mouseenter", () => {
    secretMessage.style.display = "block";
  });
  switchBox.addEventListener("mouseleave", () => {
    secretMessage.style.display = "";
  });
}

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  secretMessage.style.left = e.clientX + "px";
  secretMessage.style.top = e.clientY + "px";
  let windowWidth = window.innerWidth;

  // Check if window width is above 1000px
  if (windowWidth > 1000) {
    anime({
      targets: blobs,
      translateX: function (blob) {
        const rect = blob.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const deltaX = e.clientX - centerX;
        return deltaX * 0.4;
      },
      translateY: function (blob) {
        const rect = blob.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const deltaY = e.clientY - centerY;
        return deltaY * 0.4;
      },
      duration: 10000,
      easing: "easeOutSine",
    });
  }
});

// End Cursor and Blob Effect //

// Tilt Effect //

let constrain = 1100;
let mainBody = document.querySelector(".tilt-backlayer");
let tiltLayers = document.querySelectorAll(".tilt-layer");

mainBody.addEventListener("mousemove", function (e) {
  let windowWidth = window.innerWidth;

  // Check if window width is above 1000px
  if (windowWidth > 1000) {
    tiltLayers.forEach((layer) => {
      let box = layer.getBoundingClientRect();
      let xy = [e.clientX, e.clientY];
      let calcX = -(xy[1] - box.y - box.height / 2) / constrain;
      let calcY = (xy[0] - box.x - box.width / 2) / constrain;

      if (layer.contains(e.target)) {
        layer.style.transform =
          "perspective(150px) " +
          "rotateX(" +
          calcX +
          "deg) " +
          "rotateY(" +
          calcY +
          "deg)";
      } else {
        layer.style.transform = "";
      }
    });
  } else {
    tiltLayers.forEach((layer) => {
      layer.style.transform = "";
    });
  }
});

// End Tilt Effect //

// Name Wave Effect //

window.addEventListener("load", function () {
  const nameSpanElements = [...document.querySelectorAll("h1.hover-text span")];
  const titleSpanElements = [
    ...document.querySelectorAll("h2.hover-text span"),
  ];

  const delayBetweenSpans = 50;

  function applyWaveEffectToSpanElements(elements) {
    elements.forEach(function (span, index) {
      setTimeout(function () {
        span.classList.add("hover-effect");

        setTimeout(function () {
          span.classList.remove("hover-effect");
        }, 400);
      }, index * delayBetweenSpans);
    });

    // Now Reverse //

    const initialAnimationDuration = elements.length * delayBetweenSpans + 400;

    setTimeout(function () {
      elements
        .slice()
        .reverse()
        .forEach(function (span, index) {
          setTimeout(function () {
            span.classList.add("hover-effect");

            setTimeout(function () {
              span.classList.remove("hover-effect");
            }, 400);
          }, index * delayBetweenSpans);
        });
    }, initialAnimationDuration);
  }

  applyWaveEffectToSpanElements(nameSpanElements);
  applyWaveEffectToSpanElements(titleSpanElements);

  // Run Function on Click //

  const headerBox = document.querySelector(".header-box");
  headerBox.addEventListener("click", () => {
    applyWaveEffectToSpanElements(nameSpanElements);
    applyWaveEffectToSpanElements(titleSpanElements);
  });
});

// End Name Wave Effect //

// Party Mode //

const partyModeCheckbox = document.getElementById("party-mode");
const discoBall = document.getElementById("disco-ball");
discoBall.style.display = "none";
let colorInterval;

function stopColorChange() {
  clearInterval(colorInterval);
  blobs.forEach((blob) => {
    blob.style.backgroundColor = "#34f5c520";
  });
}

partyModeCheckbox.addEventListener("change", function () {
  if (partyModeCheckbox.checked) {
    letsParty();
    discoBall.style.display = "block";
    discoBall.classList.add("show");
  } else {
    stopColorChange();
    discoBall.classList.remove("show");
  }
});

function letsParty() {
  stopColorChange();
  const neonColors = [
    "#ff00ff20",
    "#00ffff20",
    "#ff00aa20",
    "#00ff0020",
    "#ffff0020",
    "#ff008820",
    "#ff770020",
    "#00ff7720",
    "#ff005520",
    "#00ffaa20",
    "#ff770020",
    "#00aaff20",
    "#ffaa0020",
    "#00ff5520",
    "#ff00ff20",
    "#ff880020",
  ];

  function assignRandomColors() {
    blobs.forEach((blob) => {
      const randomColor =
        neonColors[Math.floor(Math.random() * neonColors.length)];
      blob.style.backgroundColor = randomColor;
    });
  }

  assignRandomColors(); // Call it once to set initial colors

  colorInterval = setInterval(assignRandomColors, 1000);
}

// End Party Mode //

// Hover On Sections Effect //

const aboutBox = document.querySelector(".about-box");
const downArrow = document.getElementById("hover-arrow-down");
const experienceBox = document.querySelector(".experience-box");
const projectBox = document.querySelector(".project-box");
const customCursor = document.querySelector(".custom-cursor");
const aboutNav = document.querySelector(".nav-about");
const experienceNav = document.querySelector(".nav-experience");
const projectsNav = document.querySelector(".nav-projects");

// Nav Changes //

const aboutNavEnterListener = function () {
  aboutBox.style.backgroundColor = "#34F5C515";
};

const aboutNavLeaveListener = function () {
  aboutBox.style.backgroundColor = "";
};

const experienceNavEnterListener = function () {
  experienceBox.style.backgroundColor = "#1DCDFE15";
};

const experienceNavLeaveListener = function () {
  experienceBox.style.backgroundColor = "";
};

const projectsNavEnterListener = function () {
  projectBox.style.backgroundColor = "#C19DFF15";
};

const projectsNavLeaveListener = function () {
  projectBox.style.backgroundColor = "";
};

// Info box Changes //

const aboutBoxEnterListener = function () {
  downArrow.style.display = "block";
  if (!partyModeCheckbox.checked) {
    blobs.forEach((blob) => {
      blob.style.background = "#34F5C525";
    });
  }
};

const aboutBoxLeaveListener = function () {
  downArrow.style.display = "";
};

const experienceBoxEnterListener = function () {
  customCursor.style.backgroundColor = "#1DCDFE25";
  if (!partyModeCheckbox.checked) {
    blobs.forEach((blob) => {
      blob.style.background = "#1DCDFE30";
    });
  }
};

const experienceBoxLeaveListener = function () {
  customCursor.style.backgroundColor = "";
  if (!partyModeCheckbox.checked) {
    blobs.forEach((blob) => {
      blob.style.background = "";
    });
  }
};

const projectBoxEnterListener = function () {
  customCursor.style.backgroundColor = "#C19DFF25";
  if (!partyModeCheckbox.checked) {
    blobs.forEach((blob) => {
      blob.style.background = "#C19DFF25";
    });
  }
};

const projectBoxLeaveListener = function () {
  customCursor.style.backgroundColor = "";
  if (!partyModeCheckbox.checked) {
    blobs.forEach((blob) => {
      blob.style.background = "";
    });
  }
};

const addEffectsFunc = function () {
  aboutBox.addEventListener("mouseenter", aboutBoxEnterListener);
  aboutBox.addEventListener("mouseleave", aboutBoxLeaveListener);
  aboutNav.addEventListener("mouseenter", aboutNavEnterListener);
  aboutNav.addEventListener("mouseleave", aboutNavLeaveListener);
  experienceBox.addEventListener("mouseenter", experienceBoxEnterListener);
  experienceBox.addEventListener("mouseleave", experienceBoxLeaveListener);
  experienceNav.addEventListener("mouseenter", experienceNavEnterListener);
  experienceNav.addEventListener("mouseleave", experienceNavLeaveListener);
  projectBox.addEventListener("mouseenter", projectBoxEnterListener);
  projectBox.addEventListener("mouseleave", projectBoxLeaveListener);
  projectsNav.addEventListener("mouseenter", projectsNavEnterListener);
  projectsNav.addEventListener("mouseleave", projectsNavLeaveListener);
};

const removeEffectsFunc = function () {
  aboutBox.removeEventListener("mouseenter", aboutBoxEnterListener);
  aboutBox.removeEventListener("mouseleave", aboutBoxLeaveListener);
  aboutNav.removeEventListener("mouseenter", aboutNavEnterListener);
  aboutNav.removeEventListener("mouseleave", aboutNavLeaveListener);
  experienceBox.removeEventListener("mouseenter", experienceBoxEnterListener);
  experienceBox.removeEventListener("mouseleave", experienceBoxLeaveListener);
  experienceNav.removeEventListener("mouseenter", experienceNavEnterListener);
  experienceNav.removeEventListener("mouseleave", experienceNavLeaveListener);
  projectBox.removeEventListener("mouseenter", projectBoxEnterListener);
  projectBox.removeEventListener("mouseleave", projectBoxLeaveListener);
  projectsNav.removeEventListener("mouseenter", projectsNavEnterListener);
  projectsNav.removeEventListener("mouseleave", projectsNavLeaveListener);
};

const handleWindowResize = function () {
  let windowWidth = window.innerWidth;
  if (windowWidth <= 1000) {
    removeEffectsFunc();
  } else {
    addEffectsFunc();
  }
};

handleWindowResize();

window.addEventListener("resize", handleWindowResize);

// End Hover On Sections Effect //
