const express = require('express');

// const basicAuth = require('express-basic-auth')
// const bcrypt = require("bcrypt");
const {expressjwt:jwt} = require('express-jwt');
const jwks = require('jwks-rsa');

function routes(User,Item){
    const loginRouter = express.Router();

    // configure OAuth
    // To create and access OAuth API token, visit http://auth0.com
    const jwtCheck = jwt({
        secret: jwks.expressJwtSecret({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: 'https://dev-7yqi8at9.us.auth0.com/.well-known/jwks.json'
      }),
      audience: 'http://localhost:4000',
      issuer: 'https://dev-7yqi8at9.us.auth0.com/',
      algorithms: ['RS256']
    });

    loginRouter.use(jwtCheck);

    // // configure basic auth
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

    // access all items
    loginRouter.route('/items')
    .get((req, res) => {
        // console.log( Item.find())
         Item.find((err, items) => {
            if(err){
                return res.send(err);
            }
            return res.json(items);
        });
    });

    return loginRouter;
}

module.exports = routes;
