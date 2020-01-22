const Dev = require("../models/dev");

module.exports ={
    async index(req, resp){
        const {latitude, longitude, techs} = req;
        const techsArray = techs.split(",").map((tech) => tech.trim());

        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates:[latitude, longitude],
                    },
                    $maxDistance: 10000,
                }
            }
        });
        return resp.json({});
    }
}