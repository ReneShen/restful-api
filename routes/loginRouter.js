const express = require('express');

// const basicAuth = require('express-basic-auth')
// const bcrypt = require("bcrypt");
const {expressjwt:jwt} = require('express-jwt');
const jwks = require('jwks-rsa');

function routes(User, Recipe){
    const loginRouter = express.Router();

    //---------------------------code: configure Auth0--------------------------------//
    // A 3rd party identity provider using OAuth framework
    // To create and access Auth0 API token, visit http://auth0.com
    const jwtCheck = jwt({
        secret: jwks.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: 'https://dev-7yqi8at9.us.auth0.com/.well-known/jwks.json'
      }),
      audience: 'https://dev-7yqi8at9.us.auth0.com/api/v2/',
      issuer: 'https://dev-7yqi8at9.us.auth0.com/',
      algorithms: ['RS256']
    });

    loginRouter.use(jwtCheck);

    //---------------------------code: configure basic auth--------------------------------//
    // loginRouter.use(
    //     basicAuth({
    //     authorizer: dbAuthorizer,
    //     authorizeAsync: true,
    //     unauthorizedResponse: () => "You don't have any access."
    //     })
    // )

    // // compare username and password with the db content
    // // return boolean indicating password match
    // async function dbAuthorizer(username, password, callback){
    //     try{
    //         // get matching user from db
    //         const user = await User.find({username : username})

    //         // if username is valid compare passwords
    //         let isValid = (user != null) ? await bcrypt.compare(password, user[0].password) : false;
    //         callback(null, isValid)

    //     }catch(err){
    //         // if authorizer fails, show error
    //         console.log("Error: ",err)
    //         callback(null, false)
    //     }
    // }

    // access all recipes
    loginRouter.route('/recipes')
    .get((req, res) => {
        Recipe.find((err, recipes) => {
            if(err){
                return res.send(err);
            }
            return res.json(recipes);
        });
    });

    return loginRouter;
}

module.exports = routes;
