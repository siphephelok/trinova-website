/* ============================
   MOBILE MENU
============================ */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });

}


/* ============================
   CURRENT YEAR
============================ */

const year =
    document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ============================
   SCROLL ANIMATION
============================ */

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    observer.observe(element);

});


/* ============================
   CONTACT FORM
============================ */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        () => {

            const button =
                contactForm.querySelector("button");

            button.textContent =
                "Sending...";

        }
    );

}