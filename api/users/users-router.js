
const router = require("express").Router();
const mw = require("./users-middleware");
const usersModel = require("./users-model");

router.get("/users", (req,res,next) => {
    try {
        const users = usersModel.getAllUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
})

router.post("/register",mw.validatePayload,(req,res,next) => {
    try {
        let user = {username: req.body.username, password:req.body.password}
        const insertedUser = usersModel.insert(user);
        res.status(201).json(insertedUser);
    } catch (error) {
        next(error);
    }
})

router.post("/login", mw.validatePayload, mw.validateLogin, (req,res,next) => {
    try {
        res.json({message: `Welcome ${req.existUser.username} - userId:${req.existUser.id}`});
    } catch (error) {
        next(error);
    }
});

module.exports = router;