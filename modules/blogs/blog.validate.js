const Joi = require("joi");
const { uniqueId } = require("lodash");


const Schema = Joi.object({
    author:Joi.string().max(30),
    title: Joi.string().required(),
    slug: Joi.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    content:Joi.string().min(10),
    status: Joi.array().items(Joi.string().valid('draft', "published")),
    

});

const validate=(req, res, next)=>{
   const {error}= Schema.validate(req.body);
   if(error) next(error.details[0].message)
   else next();
};
module.exports={validate};