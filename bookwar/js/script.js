var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



let btn = document.getElementById("Show-modal");
btn.addEventListener("click", showModal);

function showModal(){
  let modal = document.getElementsByClassName("model-login")[0];
  modal.style.top = "30%"
}

let btn2 = document.getElementById("Show-modal2");
btn2.addEventListener("click", showModal2);

function showModal2(){
  let modal2 = document.getElementsByClassName("model-reg")[0];
  modal2.style.top = "30%"
}