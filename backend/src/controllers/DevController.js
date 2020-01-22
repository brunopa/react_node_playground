const axios = require('axios')
const Dev = require("../models/dev")
const mongose = require('mongoose')
module.exports = 
{
    
    async store (req, resp) {



        const { github_username, techs, latitude, longitude } = req.body;
        console.log('Buscando');
        let dev = await Dev.findOne({github_username});
        console.log(github_username);
        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = apiResponse.data;
            const techsArray = techs.split(",").map((tech) => tech.trim());
            console.log('Buscou');    
            const location = {
                type: 'Point',
                coordinate:[longitude, latitude]
            }
            console.log('Criando');
            

            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                //location
            });
            console.log('Criou'); 
        }

        
        return resp.json(dev);
    },

    async index(req, resp){
        const devs = await Dev.find();
        return resp.json(devs);
    },
    async find(req, resp){
        
    }
}