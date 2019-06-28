// membersController.js
const axios = require('axios');

// Handle view comments info
exports.view = function (req, res) {
    let org = req.params.org;
    
    axios.get('https://api.github.com/orgs/'+org+'/members')
    .then(response => {
        let allMembers = [];
        for (let i=0; i<response.data.length; i++) {
            let memberData = {};

            // since the members api did not return the number of followers and following, then I am mocking this data with random number.
            let no_of_followers = Math.floor((Math.random() * 30) + 1);
            let no_of_following = Math.floor((Math.random() * 30) + 1);

            memberData["login"] = response.data[i].login;
            memberData["avatar_url"] = response.data[i].avatar_url;
            memberData["no_of_followers"] = no_of_followers;
            memberData["no_of_following"] = no_of_following;

            allMembers.push(memberData);
        }
        allMembers.sort((a, b) => (a.no_of_followers < b.no_of_followers) ? 1 : -1);
        return allMembers;
    })
    .then(allMembers => {
        res.json(200,{
            members: allMembers
        });
    })
    .catch(error => {
        res.send(error);
    });
};


