let button = document.querySelector(".btn--main");
let tl = new TimelineMax();

button.addEventListener("click", runAnim);

function runAnim() {
  tl.from("#svg__base--bottom", 0.2, {
    scaleY: 0,
    transformOrigin: "bottom",
    ease: Power2.easeOut
  })
    .from("#svg__base--top", 0.1, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: Bounce.easeOut
    })
    .from("#svg__screen--bottom", 0.2, {
      scaleX: 0,
      transformOrigin: "center",
      ease: Bounce.easeOut
    })
    .from("#svg__screen--top", 0.2, {
      scaleY: 0,
      transformOrigin: "bottom",
      ease: Circ.easeOut,
      delay: 0.1
    })
    .from("#svg__box1", 0.1, {
      scale: 0
    })
    .staggerFrom(
      "#Layer_1 g:nth-child(1) g path",
      0.1,
      {
        scaleX: 0
      },
      -0.1
    );
}
