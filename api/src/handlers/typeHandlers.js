const getTypesHandler = (req,res)=>{
    res.status(200).send('Traigo todos los types de Api inicialmente, guardo en BBDD y en el futuro traigo todos los types de la bbdd');
};


module.exports = {getTypesHandler};