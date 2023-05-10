let ul = document.querySelector('nav .ul');
    
function openMenu(){
    ul.classList.add('open')
}

function closeMenu(){
    ul.classList.remove('open')
}

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween:30,
    slidesPerGroup:3,
     loop:true,
     loopFillGroupWithBlank:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Mostra o botão depois que o usuário rola 20px da parte superior do documento
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Quando o usuário clica no botão, ele retorna ao topo do documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
