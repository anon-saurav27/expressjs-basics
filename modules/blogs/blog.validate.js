const Joi = require("joi");
const { uniqueId } = require("lodash");

const Schema = Joi.object({
    aurthor:Joi.string().max(30).required(),
    username:Joi.string().alphanum().min(3).max(30).required(),
    pages: Joi.number(),
});

const validate=(req, res, next)=>{
   const {error}= Schema.validate(req.body);
   if(error) next(error.details[0].message)
   else next();
};
module.exports={validate};