/* =========================================================
   TRINOVA TECHNOLOGIES
   PROJECTS PAGE JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PROJECT FILTER
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const projectCards =
        document.querySelectorAll(".project-card");

    const noResults =
        document.getElementById("noResults");


    filterButtons.forEach(button => {

        button.addEventListener("click", () => {

            const filter =
                button.getAttribute("data-filter");

            let visibleProjects = 0;


            /* Active filter button */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            /* Filter project cards */

            projectCards.forEach(card => {

                const category =
                    card.getAttribute("data-category");

                if (
                    filter === "all" ||
                    category === filter
                ) {

                    card.classList.remove("hidden");

                    visibleProjects++;

                } else {

                    card.classList.add("hidden");

                }

            });


            /* Show / hide no-results message */

            if (visibleProjects === 0) {

                noResults.classList.add("show");

            } else {

                noResults.classList.remove("show");

            }

        });

    });



    /* =====================================================
       PROJECT MODAL
    ===================================================== */

    const modal =
        document.getElementById("projectModal");

    const modalClose =
        document.getElementById("modalClose");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalCategory =
        document.getElementById("modalCategory");

    const modalDescription =
        document.getElementById("modalDescription");

    const viewButtons =
        document.querySelectorAll(".view-project");


    /* Make sure modal exists */

    if (!modal) {
        return;
    }


    /* =====================================================
       OPEN MODAL
    ===================================================== */

    viewButtons.forEach(button => {

        button.addEventListener("click", () => {

            const title =
                button.getAttribute("data-title");

            const category =
                button.getAttribute("data-category");

            const description =
                button.getAttribute("data-description");


            /* Put project information into modal */

            modalTitle.textContent = title;

            modalCategory.textContent = category;

            modalDescription.textContent = description;


            /* Show modal */

            modal.classList.add("show");

            /* Prevent page scrolling while modal is open */

            document.body.style.overflow = "hidden";

        });

    });



    /* =====================================================
       CLOSE MODAL
    ===================================================== */

    function closeModal() {

        modal.classList.remove("show");

        document.body.style.overflow = "";

    }


    /* Close using X */

    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeModal
        );

    }


    /* =====================================================
       CLOSE WHEN CLICKING OUTSIDE
    ===================================================== */

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            closeModal();

        }

    });


    /* =====================================================
       CLOSE USING ESCAPE
    ===================================================== */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("show")
        ) {

            closeModal();

        }

    });

});