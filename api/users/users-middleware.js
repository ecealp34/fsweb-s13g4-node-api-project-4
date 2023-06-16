
const usersModel = require("./users-model");

function validatePayload(req,res,next) {
    try {
        let {username,password} = req.body;
        if(!username || !password) {
           res.status(400).json({message: "Gerekli alanları kontrol ediniz."});
        } else {
          next();
        }
    } catch (error) {
        next(error);
    }
}


function validateLogin(req,res,next) {
    try {
        let existUser = usersModel.findUser(req.body.username,req.body.password);
        if(!existUser) {
           res.status(404).json({message: "Kullanıcı yok."});
        } else {
            req.existUser = existUser;
            next();
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {validateLogin,validatePayload};
