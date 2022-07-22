const express = require('express');

function routes(User){
    const userRouter = express.Router();

    // Routes for all users
    userRouter.route('/users')
    .post((req, res) => {
        const user = new User(req.body);
        
        // Save data to database
        user.save();
        return res.status(201).json(user);
    })
    .get((req, res) => {
        const query = {};
        if(req.query.username) {
            query.username = req.query.username;
        }

        User.find(query, (err, users) => {
            if(err){
                return res.send(err);
            }
            return res.json(users);
        });
    });

    // Create Middleware to find userID or return error
    userRouter.use('/users/:userId',(req, res, next) => {
        User.findById(req.params.userId, (err, user) => {
            if(err){
                return res.send(err);
            }
            if(user){
                req.user = user;
                return next();
            }
            return res.sendStatus(404);
        });
    })

    // Routes for one user based on their ID
    userRouter.route('/users/:userId')
        .get((req, res) => { res.json(req.user);}) 
        .put((req, res) => {
            const {user} = req;

            user.name = req.body.name;
            user.username = req.body.username;
            user.email = req.body.email;
            user.address = req.body.address;
            user.phone = req.body.phone;
            user.website = req.body.website;
            user.company = req.body.company;
            user.active = req.body.active;
            
            req.user.save((err) => {
                if(err){
                    return res.send(err)
                }
                return res.json(user);
            });
        }) 
        .patch((req, res) => {
            const {user} = req;

            // Shouldn't be able to change the _id
            if(req.body._id){ 
                delete req.body._id;
            }

            Object.entries(req.body).forEach((prop) => {
                const key = prop[0];
                const value = prop[1];
                user[key] = value;
            })
            
            req.user.save((err) => {
                if(err){
                    return res.send(err)
                }
                return res.json(user);
            });
        })
        .delete((req, res) => {
            req.user.remove((err) => {
                if(err){
                   return res.send(err);
                }
                return res.sendStatus(204);
            });
        })

    return  userRouter;
}



module.exports = routes;