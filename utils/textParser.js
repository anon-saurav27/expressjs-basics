const slugify=require("slugify");

const generateSlug= (text)=>{
    return slugify(text);
};

module.exports={generateSlug};