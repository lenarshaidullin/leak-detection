// hello 

// cards-carousel
$('.cards-carousel').owlCarousel({
  nav: false,
  dots: false,
  items: 1,
  responsive: {
    568: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    }
  },
  margin: 20
})