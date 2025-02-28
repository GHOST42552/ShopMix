document.addEventListener('DOMContentLoaded', () => {
  inicializarCarrossel();
  const sliderItems = document.querySelectorAll('.slick-item');
  sliderItems.forEach(item => item.classList.add('show'));
});

function inicializarCarrossel() {
  $('.slider').slick({
      infinite: true,
      dots: true,
      speed: 1000,
      centerMode: true,
      centerPadding: '300px',
      arrows: true,
      autoplay: true,
      lazyLoad: 'ondemand',
      focusOnSelect: true,
      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  });
}

function reInicializarCarrossel() {
  $('.slider').slick('unslick');
  inicializarCarrossel(); 
  console.log('Carrossel atualizado!');
}