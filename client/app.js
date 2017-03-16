var app = angular.module('app',['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/',{
        templateUrl: 'partials/loginregister.html',
        controller: 'userController'
    })
    .when('/newsfeed',{
        templateUrl: 'partials/newsfeed.html',
        controller: 'userController'
    })
    .when('/user/:id', {
        templateUrl: 'partials/user.html',
        controller: 'userController'
    })
    .when('/news/:id', {
        templateUrl: 'partials/news.html',
        controller: 'userController'
    })
    .otherwise({
        redirectTo: '/'
    });
});