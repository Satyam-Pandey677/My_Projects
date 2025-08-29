const Container = document.getElementById("panel");
const Box = document.getElementById("box");

Container.addEventListener("mousemove", (details) => {
    var xval = gsap.utils.mapRange(
        0,
        Container.clientWidth,
        100 + Box.getBoundingClientRect().width / 2,
        Container.clientWidth - (100 + Box.getBoundingClientRect().width / 2),
        details.clientX,
    );
    var yval = gsap.utils.mapRange(
        0,
        Container.clientHeight,
        100 + Box.getBoundingClientRect().height / 2,
        Container.clientHeight - (100 + Box.getBoundingClientRect().height / 2),
        details.clientY,
    );

    gsap.to(Box, {
        left: xval + 'px',
        top: yval + 'px',
        ease: Power3.easeOut
    });
});