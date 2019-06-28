var mongoose = require('mongoose');
// Setup schema
var commentSchema = mongoose.Schema({
    org_name: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: Boolean,
        default: false
    }
});
// Export Comment model
var Comment = module.exports = mongoose.model('comment', commentSchema);
module.exports.get = function (callback, limit) {
    Comment.find(callback).limit(limit);
}