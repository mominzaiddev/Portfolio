/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* Close menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* =========================
   REVEAL ON SCROLL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================
   HERO 3D MOUSE PARALLAX
========================= */

const scene = document.getElementById("scene");

if (scene) {

    scene.addEventListener("mousemove", (event) => {

        const rect = scene.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4;
        const rotateY = ((x - centerX) / centerX) * 5;

        scene.style.setProperty(
            "--mx",
            `${rotateY}deg`
        );

        scene.style.setProperty(
            "--my",
            `${rotateX}deg`
        );

    });


    scene.addEventListener("mouseleave", () => {

        scene.style.setProperty(
            "--mx",
            "0deg"
        );

        scene.style.setProperty(
            "--my",
            "0deg"
        );

    });

}


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background = "rgba(8,8,8,.88)";

    } else {

        navbar.style.background = "rgba(8,8,8,.72)";

    }

});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SMOOTH BUTTON FEEDBACK
========================= */

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        link.style.transform = "scale(.98)";

        setTimeout(() => {
            link.style.transform = "";
        }, 120);

    });

});


/* =========================
   YEAR
========================= */

const yearText = document.querySelector("footer p");

if (yearText) {

    const currentYear = new Date().getFullYear();

    yearText.innerHTML =
        `© ${currentYear} Momin Zaid. Built with code & curiosity.`;

}