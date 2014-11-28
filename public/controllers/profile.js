// create the controller and inject Angular's $scope
var user_id;
myapp.controller('profileController', function($scope, $http) {

    $http.get("/user/" + 'acarri').success(function(data) {
        user_id = data[0].user_id;
        $scope.firstname = data[0].firstname;
        $scope.lastname = data[0].lastname;
        $scope.username = data[0].username;
        $scope.email = data[0].email;
        $scope.gender = data[0].gender;
        $scope.preference = data[0].preference;
    });

    //lol

    $http.get("/matches/" + 'acarri').success(function(data) {



    });

});