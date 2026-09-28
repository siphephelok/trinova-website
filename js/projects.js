document.addEventListener("DOMContentLoaded", () => {

    /* ================================
       PROJECT FILTER
    ================================= */

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


            /* Active button */

            filterButtons.forEach(btn => {
                btn.classList.remove("active");
            });

            button.classList.add("active");


            /* Filter projects */

            let visibleProjects = 0;

            projectCards.forEach(card => {

                const category =
                    card.getAttribute("data-category");

                if (filter === "all" || category === filter) {

                    card.style.display = "";

                    visibleProjects++;

                } else {

                    card.style.display = "none";

                }

            });


            /* No results message */

            if (visibleProjects === 0) {
                noResults.style.display = "block";
            } else {
                noResults.style.display = "none";
            }

        });

    });


    /* ================================
       PROJECT MODAL
    ================================= */

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


    /* Open modal */

    viewButtons.forEach(button => {

        button.addEventListener("click", () => {

            const title =
                button.getAttribute("data-title");

            const category =
                button.getAttribute("data-category");

            const description =
                button.getAttribute("data-description");


            modalTitle.textContent = title;

            modalCategory.textContent = category;

            modalDescription.textContent = description;


            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    /* Close modal */

    modalClose.addEventListener("click", () => {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    });


    /* Close when clicking outside modal */

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });


    /* Close with ESC key */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {

            modal.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});