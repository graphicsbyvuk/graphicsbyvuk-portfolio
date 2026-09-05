const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


const animated = document.querySelectorAll(
    ".project, .service, .about-text, .contact h2"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.12
});


animated.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition =
        "opacity .8s ease, transform .8s cubic-bezier(.2,.7,.2,1)";

    observer.observe(element);

});