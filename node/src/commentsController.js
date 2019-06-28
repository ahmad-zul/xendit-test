// commentsController.js
// Import the model
Comment = require('./commentsModel');

// Handle create comments actions
exports.new = function (req, res) {
    var comment = new Comment();
    comment.org_name = req.params.org;
    comment.comment = req.body.comment;
// save the contact and check for errors
    comment.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New comment added!'
        });
    });
};

// Handle view comments info
exports.view = function (req, res) {
    Comment.find({org_name:req.params.org, deleted:false},{_id:0,comment:1}, function (err, comment) {
        if (err)
            res.send(err);
        if (comment.length > 0) {
            res.json({
                message: 'Comment(s) are loading.',
                data: comment
            });
        } else {
            res.json({
                message: 'No comment to load',
                data: comment
            });
        }
    });
};

// Handle delete comments
exports.delete = function (req, res) {

    Comment.updateMany({org_name:req.params.org}, {"$set":{"deleted": true}}, {"multi": true}, (err, comment) => {
        if (err)
            res.send(err);
        res.json({
            message: 'Comments deleted'
        });
    });
};