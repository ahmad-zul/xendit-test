// membersController.js
const axios = require('axios');

// Handle view comments info
exports.view = function (req, res) {
    let org = req.params.org;
    
    axios.get('https://api.github.com/orgs/'+org+'/members')
    .then(response => {
        return response.data;
    })
    .then(responseData => {
        let allMembers = [];
        for (let i=0; i<responseData.length; i++)
        {
            // console.log(response.data[i]);
            let memberData = {};
            memberData["login"] = responseData[i].login;
            memberData["avatar_url"] = responseData[i].avatar_url;
            // let no_of_followers = Math.floor((Math.random() * 30) + 1);
            // let no_of_following = Math.floor((Math.random() * 30) + 1);
            let no_of_followers = 0;
            let no_of_following = 0;
            if(i < 1)
            {
                // using different kind of way
                let followersURL = 'https://api.github.com/users/'+responseData[i].login+'/followers';
                let followingURL = 'https://api.github.com/users/'+responseData[i].login+'/following';

                const promise1 = axios.get(followersURL);
                const promise2 = axios.get(followingURL);

                Promise.all([promise1, promise2])
                .then(function(values) {
                    return values;
                })
                .then(function(values) {
                    console.log(values[0].data.length);
                    no_of_followers = values[0].data.length;
                    no_of_following = values[1].data.length
                    console.log("In promises all no_of_followers "+no_of_followers);
                    console.log("In promises all no_of_following "+no_of_following);
                });

                console.log("Outside promises all no_of_followers "+no_of_followers);
                console.log("Outside promises all no_of_following "+no_of_following);
            }
            
            memberData["no_of_followers"] = no_of_followers;
            memberData["no_of_following"] = no_of_following;

            allMembers.push(memberData);
        }
        
        allMembers.sort((a, b) => (a.no_of_followers < b.no_of_followers) ? 1 : -1)

        console.log("=============");
        console.log(allMembers);
        // let jsonObject = JSON.stringify(allMembers);
        return allMembers;
    })
    .then (allMembers => {
        res.json(200,{
            members: allMembers
        });
    })
    .catch(error => {
        res.send(error);
    });
};


