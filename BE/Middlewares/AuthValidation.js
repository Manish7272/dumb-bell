const joi = require("joi");

const signupValidation = (req, resp, next)=>{
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    });

    const {error} = schema.validate(req.body);
    if(error){
        return resp.status(400).json({message: "Bad request", error})
    }
    next();
}


const loginValidation = (req, resp, next)=>{
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    });

    const {error} = schema.validate(req.body);
    if(error){
        return resp.status(400).json({message: "Bad request", error})
    }
    next();
}

module.exports = {signupValidation, loginValidation}