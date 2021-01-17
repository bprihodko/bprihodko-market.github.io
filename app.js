

/*let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");
console.log(modal);
console.log(closeBtn);



closeBtn.addEventListener('click', function () {
    modal.classList.remove("show");
    modal.classList.add("hide");
})
function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

closeBtn.addEventListener("click", function (e) {
    if (e.target == modal) {
        closeModal(0)
    }
})*/

// mobile-menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".menu");
console.log(mobileMenu);
console.log(mainMenu);


mobileMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle("active-menu");
    if (mobileMenu.classList.contains("active-menu")) {
        mainMenu.classList.add("active-menu");
    } else {
        mainMenu.classList.remove("active-menu");
    } 
})

// form

let contactForm = document.querySelector(".contact-form");
let buttonStart = document.querySelector(".open-form");
let closeBtn = document.querySelector(".btn-close");
let overlay = document.querySelector(".overlay");

console.log(contactForm);
console.log(buttonStart);

function openContactForm() {
    contactForm.classList.add("show");
    overlay.classList.toggle("show");
    contactForm.classList.remove("hide");
}

function closeContactForm () {
    console.log('close');
    overlay.classList.toggle("show");
    contactForm.classList.add("hide");
    contactForm.classList.remove("show");
}

buttonStart.addEventListener("click", function(e) {
        openContactForm();
})

console.log(closeBtn);

closeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    closeContactForm() ;
    
})