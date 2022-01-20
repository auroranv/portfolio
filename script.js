jQuery(function($) {
  $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();

          $('header').css({
          opacity: function() {
              var elementHeight = $(this).height(),
              opacity = ((elementHeight - scrollTop) / elementHeight);
              return opacity;
          }
      });
  });
})


// jQuery(function($) {
// var divs = $('.name'),
//     limit = 300;  /* scrolltop value when opacity should be 0 */
//
// $(window).on('scroll', function() {
//    var st = $(this).scrollTop();
//
//    /* avoid unnecessary call to jQuery function */
//    if (st <= limit) {
//      divs.css({ 'opacity' : (1 - st/limit)});
//    }
// });
// })
