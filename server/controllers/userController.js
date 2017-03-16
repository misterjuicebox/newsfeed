var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports=(function(app){

    return{

        login: function(req, res){
            User.findOne({name: req.body.name}, function(err, data){
                if(!data){
                    var user = new User(req.body);
                    user.save(function(err, data){
                        req.session.user = data;
                        req.session.save();
                        res.json(data);
                    })
                }
                else{
                    req.session.user = data;
                    req.session.save();
                    res.json(data);
                }
            })
        },

        checkstatus: function(req, res){
            if(req.session.user){
                res.json(req.session.user);
            }
            else{
                res.json(null);
            }
        },

        logout: function(req, res){
            req.session.destroy();
            res.redirect('/');
        }
    }
})();