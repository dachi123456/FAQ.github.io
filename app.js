const spans = document.querySelectorAll(".spans");
const arrow = document.querySelectorAll(".down");
const paragraphs = document.querySelectorAll(".spans p");
const spanAfter = document.querySelectorAll(".after-click")

paragraphs.forEach((p, i) => {
    p.addEventListener('click', function() {
      if (p.style.fontWeight === '700') {
        p.style.fontWeight = 300;
        spanAfter[i].style.display = "none";
        arrow[i].classList.remove("up");
      arrow[i].classList.add("down");
        
      } else {
        p.style.fontWeight = 700;
        spanAfter[i].style.display = "block";
        arrow[i].classList.remove("down");
      arrow[i].classList.add("up");
       
      }
    });
  });
  
  document.addEventListener('click', function(event) {
    if (!event.target.matches('.spans p, .after-click')) {
      paragraphs.forEach((p, i) => {
        p.style.fontWeight = 300;
        spanAfter[i].style.display = "none";
        arrow[i].classList.remove("up");
        arrow[i].classList.add("down");
      });
    }
  });


