const getAllTypes = require('../controllers/typesControllers.js');


const getTypesHandler = async(req,res)=>{
    try {
        res.status(200).json(await getAllTypes());
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};


module.exports = getTypesHandler;