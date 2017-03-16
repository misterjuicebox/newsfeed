app.factory('userFactory', ["$http", "$location", function($http, $location){
    var factory = {};

    factory.login = function(user){
        $http.post('/login', user).then(function(output){
            if(output.data){
                $location.url('/newsfeed');
            }
        })
    };

    factory.checkStatus = function(callback){
        $http.get('/checkstatus').then(function(output){
            if(!output.data){
                $location.url('/');
            }
            else{
                callback(output.data);
            }
        })
    };

    return factory;
}]);