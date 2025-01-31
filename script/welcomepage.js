gsap.from(".h1", {
  x: -100,
  scale: 0.9,
  filter: "blur(5px)",
});
const cursor = document.querySelector(".cursorFollower");

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

const PROJECTS = document.querySelectorAll(".PROJECTS");

PROJECTS.forEach((element) => {
  const image = element.getAttribute("data-image");

  element.addEventListener("mouseenter", () => {
    cursor.style.height = "300px";
    cursor.style.width = "300px";
    cursor.style.borderRadius = "0";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundPosition = "center";

    cursor.style.backgroundImage = `url(${image})`;
    cursor.style.mixBlendMode = "normal";
    cursor.style.backgroundImage;
  });
  element.addEventListener("mouseleave", () => {
    cursor.style.height = "30px";
    cursor.style.width = "30px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = ``;
    cursor.style.mixBlendMode = "difference";
  });
});

setTimeout(() => {
  document.getElementById("loader").style.opacity = "0";
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 800);
}, 1690);
