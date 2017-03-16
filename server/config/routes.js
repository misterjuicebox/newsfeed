module.exports=function(app){

var user = require('./../controllers/userController.js');
var news = require('./../controllers/newsController.js');

app.post('/login', function(req, res){
    user.login(req, res);
});

app.get('/checkstatus', function(req, res){
    user.checkstatus(req, res);
});

app.get('/logout', function(req, res){
    user.logout(req, res);
});

app.get('/getAllNews', function(req, res){
    news.getAllNews(req, res);
});

app.post('/postNews', function(req, res){
    news.postNews(req, res);
});

app.get('/getUserNews/:id', function(req, res){
    news.getUserNews(req, res);
});

app.get('/getNews/:id', function(req, res){
    news.getNews(req, res);
});

app.get('/likeCheck/:id', function(req, res){
    news.likeCheck(req, res);
});

app.post('/like/:id', function(req, res){
    news.like(req, res);
});

app.post('/unlike/:id', function(req, res){
    news.unlike(req, res);
})
}