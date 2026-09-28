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

/* ================================
   FAQ ACCORDION
================================ */

document.addEventListener("DOMContentLoaded", () => {

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const faqItem =
                question.closest(".faq-item");

            const isOpen =
                faqItem.classList.contains("open");


            /* Close all FAQ items */

            document
                .querySelectorAll(".faq-item")
                .forEach(item => {

                    item.classList.remove("open");

                    const button =
                        item.querySelector(".faq-question");

                    if (button) {
                        button.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                    }

                });


            /* Open clicked FAQ */

            if (!isOpen) {

                faqItem.classList.add("open");

                question.setAttribute(
                    "aria-expanded",
                    "true"
                );

            }

        });

    });

});