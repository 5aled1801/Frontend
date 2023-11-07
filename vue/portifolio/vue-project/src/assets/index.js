/* eslint-disable no-unused-vars */
document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".caller");

    const textload = () => {
        setTimeout(() => {
            text.textContent = "  Developer";
        }, 0);
        setTimeout(() => {
            text.textContent = "  Freelancer";
        }, 7000);
        setTimeout(() => {
            text.textContent = "  Designer";
        }, 13000);
    };

    textload();

    setInterval(textload, 19000);
})

