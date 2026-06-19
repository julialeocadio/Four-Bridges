// ========================================
// FAQ Accordion
// ========================================

document.querySelectorAll(".faq-question").forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;

        document.querySelectorAll(".faq-answer").forEach(item => {

            if(item !== answer){
                item.style.display = "none";
            }

        });

        answer.style.display =
            answer.style.display === "block"
                ? "none"
                : "block";
    });

});


// ========================================
// Mobile Menu Toggle
// ========================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if(menuToggle && navMenu){

    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}


// ========================================
// Smooth Scrolling
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ========================================
// Active Navigation Link
// ========================================

const currentPage =
    window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link => {

    const href = link.getAttribute("href");

    if(href === currentPage){

        link.classList.add("active");

    }

});


// ========================================
// Back To Top Button
// ========================================

const backToTop = document.getElementById("backToTop");

if(backToTop){

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){

            backToTop.style.display = "block";

        }else{

            backToTop.style.display = "none";

        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}