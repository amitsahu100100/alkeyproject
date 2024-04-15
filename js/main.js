$(document).ready(function () {
  
  $('#headerbanner-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:false,
    
  });
  $('#westayConnected-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:false,
    
  });
  $('#testimonial-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:false,
    
  });
  // Add Class on scroll
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if (scroll >= 170) {
      $("body").addClass("scrollHeader");
    } else {
      $("body").removeClass("scrollHeader");
    }
  });

  




});
