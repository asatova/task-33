const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
    });
});
