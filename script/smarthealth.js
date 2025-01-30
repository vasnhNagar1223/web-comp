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
