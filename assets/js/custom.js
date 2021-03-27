$(function() {
    $(window).on('Scroll', function() {
        if($(window).scrollTop() > 10) {
            console.log('scrolling')
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
})

// $(function () {
//     $(document).scroll(function () {
//       var $nav = $(".navbar");
//       $nav.addClass('.active', $(this).scrollTop() > $nav.height());
//     });
//   });