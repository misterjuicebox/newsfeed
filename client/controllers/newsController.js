app.controller('newsController', ["$scope", "$location", "$route", "newsFactory", "$routeParams", function ($scope, $location, $route, newsFactory, $routeParams) {

    $scope.postNews = function(){
        if(!$scope.newNews || !$scope.newNews.headline || !$scope.newNews.story){
            $scope.postNewsError = 'Please share some news.'
        }
        else if($scope.newNews.headline.length > 140){
            $scope.postNewsError = 'Headline must be under 140 characters.'
        }
        else if($scope.newNews.story.length < 1){
            $scope.postNewsError = "Story must be at least 1 character long."
        }
        else{
            newsFactory.postNews($scope.newNews, function(){
                $scope.newNews = {};
                $route.reload();
            })
        }

    };

    newsFactory.getUserNews($routeParams, function(news){
        $scope.userNews = news;
    });

    newsFactory.getNews($routeParams, function(news){
        $scope.showNews = news;
    });
     
    $scope.like = function(id){
        newsFactory.likeCheck(id, function(likeStatus){
            $scope.likes = likeStatus
            if($scope.likes.status == false){
                newsFactory.like(id, function(){
                    newsFactory.getAllNews(function(news){
                    $scope.news = news;
                    });
                })
            }
        });
    };

    $scope.unlike = function(id){
        newsFactory.likeCheck(id, function(likeStatus){
            $scope.likes = likeStatus
            if($scope.likes.status == true){
                newsFactory.unlike(id, function(){
                    newsFactory.getAllNews(function(news){
                    $scope.news = news;
                    });
                })
            }
        });
    };

    newsFactory.getAllNews(function(news){
        $scope.news = news;
    });
}]);

