 // create the controller and inject Angular's $scope
 myapp.controller('gameplayController', function($scope, $http) {

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

     //============================== 4 CLEANING PRODUCTS================================
     $http.get("/cp_to_show/" + 'acarri').success(function(res) {

         $http.get('/cp_name' + res[0].cp1_id).success(function(name) {

             $scope.cp1 = name[0].product_name;
         });
         $http.get('/cp_name' + res[0].cp2_id).success(function(name) {

             $scope.cp2 = name[0].product_name;
         });
         $http.get('/cp_name' + res[0].cp3_id).success(function(name) {

             $scope.cp3 = name[0].product_name;
         });
         $http.get('/cp_name' + res[0].cp4_id).success(function(name) {

             $scope.cp4 = name[0].product_name;
         });


     });


     //====================== USER CHOOSES A CLEANING PRODUCT=============================
     $scope.choose = function() {

         $scope._image_path = "../images/" + 1 + ".png";

     }



 });