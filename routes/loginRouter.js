const express = require('express');

const basicAuth = require('express-basic-auth')
const bcrypt = require("bcrypt");

function routes(User,Item){
    const loginRouter = express.Router();

    // configure basic auth
    loginRouter.use(
        basicAuth({
        authorizer: dbAuthorizer,
        authorizeAsync: true,
        unauthorizedResponse: () => "You don't have any access."
        })
    )

    // compare username and password with the db content
    // return boolean indicating password match
    async function dbAuthorizer(username, password, callback){
        try{
            // get matching user from db
            const user = await User.findOne({where: {name : username}})
            const allUser = await User.findAll();
            console.log(allUser)
            // if username is valid compare passwords
            let isValid = (user != null) ? await bcrypt.compare(password, user.password) : false;
            callback(null, isValid)

        }catch(err){
            // if authorizer fails, show error
            console.log("Error: ",err)
            callback(null, false)
        }
    }

    // access all items
    loginRouter.route('/items')
    .get( async(req, res) => {
        let items = await Item.findAll()
        res.json({items})
    })

    // // create new session
    // loginRouter.route('/session')
    // .post(async (req, res) => {
    //     const thisUser = await User.findOne({
    //       where: {name: req.body.name}
    //     })
    //     if(!thisUser){
    //       res.send("User not found")
    //     }else{
    //       bcrypt.compare(req.body.password, thisUser.password, async (err, result) => {
    //         if(result){
    //           res.json(thisUser)
    //         }else{
    //           res.send("passwords do not match");
    //         }
    //       })
    //     }
    //   })
    return loginRouter;
}

module.exports = routes;
