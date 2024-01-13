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
