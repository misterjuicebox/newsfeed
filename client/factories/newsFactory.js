app.factory('newsFactory', ["$http", "$location", function($http, $location){
    var factory = {};

    factory.postNews = function(news, callback){
        $http.post('/postNews', news).then(function(output){
            if(output.data){
                callback();
            } 
        })
    };

    factory.getAllNews = function(callback){
        $http.get('/getAllNews').then(function(output){
            callback(output.data);
        })
    };

    factory.getUserNews = function(id, callback){
        $http.get('/getUserNews/' + id.id).then(function(output){
            callback(output.data);
        });
    };

    factory.getNews = function(id, callback){
        $http.get('/getNews/' + id.id).then(function(output){
            callback(output.data);
        })
    };

    factory.like = function(id, callback) {
        $http.post('/like/' + id).then(function(output) {
            callback();
        })
    };

    factory.unlike = function(id, callback){
        $http.post('/unlike/' + id).then(function(ouput){
            callback();
        })
    };

    factory.likeCheck = function(id, callback) {
        $http.get('/likeCheck/' + id).then(function(output){
            callback(output.data)
        })
    };
    return factory;
}]);

