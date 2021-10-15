const btnColor = document.querySelector(".btn-color");
const bodyColor = document.querySelector(".table-color");


btnColor.addEventListener('click', function() {

    bodyColor.classList.toggle("change");
});