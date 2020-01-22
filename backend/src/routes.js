
const { Router} = require('express')//espicifica o pacote
const DevController = require("./controllers/DevController")
const SearchController = require("./controllers/SearchController")

const routes = Router();


routes.get('/devs', DevController.index);
routes.post('/dev', DevController.store);   
routes.get('/search', SearchController.index);

routes.get('/', (req, resp) =>{

    return resp.json({mensage: "hello 34"});
});





module.exports = routes