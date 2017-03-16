var mongoose = require('mongoose');
var User = mongoose.model('User');
var News = mongoose.model('News');

module.exports=(function(app){

    return{

        postNews: function(req, res){
            var news = new News({headline: req.body.headline, story: req.body.story, _userName: req.session.user.name, _userId: req.session.user._id})
            User.update({_id: req.session.user._id}, {$push: {"_newsCreated": news._id}}, function(err){
            });
            news.save(function(err, data){
                if(err){
                    console.log("news not added");
                    res.redirect('/newsfeed');
                }
                else{
                    console.log('added news successfully');
                    res.json(data);
                }
            })
        },

        getAllNews: function(req, res) {
            News.find({}, function(err, data) {
                res.json(data);
            })
        },  

        getUserNews: function(req, res){
            User.findOne({_id: req.params.id}).populate("_newsCreated").exec(function(err, user){
                res.json(user);
            })
        },

        getNews: function(req, res){
            News.findOne({_id: req.params.id}).exec(function(err, news){
                res.json(news);
            })
        },

        likeCheck: function(req, res){
            News.findOne({_id: req.params.id}).exec(function(err, user){
                console.log(user, 'like check new')
                for(var x in user._userLikes){
                    if(user._userLikes[x] == req.session.user._id){                        
                        return res.json({status: true})
                    }
                }
                        return res.json({status: false})
            })
        },

        like: function(req, res) {
            News.update({_id: req.params.id}, {$inc: {likes: 1}}, {multi: true}, function(err, data){
                News.update({_id: req.params.id}, {$push: {"_userLikes": req.session.user._id}}).exec(function(err){
                });
                User.update({_id: req.session.user._id}, {$push: {"_newsLiked": req.params.id}}, function(err){
                });
                res.json(data);     
            }); 
        },

        unlike: function(req, res){
            News.update({_id: req.params.id}, {$inc: {likes: -1}}, {muti: true}, function(err, data){
                News.update({_id: req.params.id}, {$pull: {"_userLikes": req.session.user._id}}).exec(function(err){
                });
                User.update({_id: req.session.user_id}, {$pull: {"_newsLiked": req.params.id}}, function(err){
                });
                res.json(data);
            });
        }

    }
})();