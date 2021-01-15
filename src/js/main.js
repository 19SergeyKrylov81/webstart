$(window).scroll(function() {
  $('.section-title'). each(function() {
    var elPosition = $(this).offset(). top; 	// Position of the element
    var elHeight = $(this).height(); 		// Height of the element
    var windowTop = $(window).scrollTop(); 	// Top of the window
    var windowHeight = $(window).height(); 	// Height of the window
    if(elPosition < windowTop + windowHeight - elHeight) {
      $(this).addClass("animation fade-in");
    }						                   // removes the class when the element is not visible in the window
  });
});
$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows__left'),
    nextArrow: $('.arrows__right'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2          
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animate__animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();