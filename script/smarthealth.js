document.addEventListener("mousemove", (event) => {
  const cursor = document.querySelector(".cursorFollower");

  document.addEventListener("mousemove", (event) => {
    cursor.style.left = event.x + "px";
    cursor.style.top = event.y + "px";
  });
});

Shery.mouseFollower({
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.imageMasker(".mask-target" /* Element to target.*/, {
  //Parameters are optional.
  mouseFollower: true,
  text: "Vansh",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.makeMagnet(".magnet-target" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
Shery.textAnimate(".text-target" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.05,
  duration: 1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

handleCloseButtonclick = () => {
  const button = document.querySelector(".navSideBar");
  button.style.display = "none";
  const sidebarButton = document.querySelector(".ri-menu-line");
  sidebarButton.style.display = "initial";
};

handlesidebarButton = () => {
  const button = document.querySelector(".navSideBar");
  button.style.display = "initial";
  const sidebarButton = document.querySelector(".ri-menu-line");
  sidebarButton.style.display = "none";
};
