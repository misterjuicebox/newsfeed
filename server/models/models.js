var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true, minlength: 2},
    _newsCreated: [{type: Schema.Types.ObjectId, ref: 'News'}],
    _newsLiked: [{type: Schema.Types.ObjectId, ref: 'NewsLiked'}]
}, {timestamps: true})

mongoose.model('User', UserSchema);

var NewsSchema = new Schema({
    headline: {type: String, required: true, maxlength: 140},
    story: {type: String, required: true},
    likes: {type: Number, default: 0},
    _userName: {type: Schema.Types.String, ref: 'UserName'},
    _userId: {type: Schema.Types.ObjectId, ref: "UserId"},
    _userLikes: [{type: Schema.Types.ObjectId, ref: 'UserLikes'}]
}, {timestamps: true})

mongoose.model('News', NewsSchema);