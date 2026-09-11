
document.getElementById("year").textContent = new Date().getFullYear();


const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    formNote.textContent = "Thank you for your message! 💜";

    formNote.style.color = "#6c3fc5";

    contactForm.reset();

});
