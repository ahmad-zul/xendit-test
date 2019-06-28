// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to Test App',
    });
});

// Import controllers
var commentController = require('./commentsController');
var membersController = require('./membersController');

// Define the routes
router.route('/orgs/:org/comments')
    .post(commentController.new)
    .get(commentController.view)
    .delete(commentController.delete);
router.route('/orgs/:org/members')
    .get(membersController.view);
// Export API routes
module.exports = router;