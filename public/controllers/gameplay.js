 // create the controller and inject Angular's $scope
 myapp.controller('gameplayController', function($scope) {

     //set the image for the stain
     $scope.imageName = 'test_img.png';

     function testAnim(x) {
         $('#animateTest').removeClass().addClass(x);
         var wait = window.setTimeout(function() {
                 $('#animateTest').removeClass()
             },
             1300
         );
     }

     $(function() {
         $pos = $('.sandbox').offset().top - 0;
         console.log('works as you thought, dyl');

         $(window).on('scroll', function() {
             if ($(window).scrollTop() >= $pos) {
                 $('.sandbox').addClass('fixed');
             } else {
                 $('.sandbox').removeClass('fixed');
             }
         });
     });

     $(document).ready(function() {
         $('a[data-test]').click(function() {
             console.log('data-set: [data-set]');
             var anim = $(this).attr('data-test');
             testAnim('bounceInDown');
         });
     });


 });