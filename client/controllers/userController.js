app.controller('userController', ["$scope", "$location", "userFactory", function ($scope, $location, userFactory) {

    userFactory.checkStatus(function(data){
        $scope.currentUser = data;
    })

    $scope.login = function(){
        if(!$scope.newUser || !$scope.newUser.name || $scope.newUser.name.length < 2){
            $scope.error = "Please enter a name longer than 1 character."
        }
        else{
        userFactory.login($scope.newUser);
        $scope.newUser = {};
        }
    };
}]);


