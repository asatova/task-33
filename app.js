const accordions = document.querySelectorAll(".accordion");
const numAccordions = accordions.length;

for (let i = 0; i < numAccordions; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
    });
}
