import axios from 'axios';

const validate = (form,errors,setErrors,property)=>{
    const top=20;
    switch(property){
        case 'name':{
            const regex = /^(?!.*\d)\w{3,}$/; 
            if (regex.test(form[property])) return setErrors({...errors,[property]:''});    
            return setErrors({...errors,[property]:'Name must have at least 3 characters and no number in it'});
        }    
        case 'image':{
            const regex =/^(ht|f)tps?:\/\/\w+([.-\w]+)?\.[a-z]{2,10}(:\d{2,5})?(\/.*)?$/i                ;
            if (regex.test(form[property])) return setErrors({...errors,[property]:''});
            return setErrors({...errors,[property]:'Image must be a string with valid Url format'});
        }
        case 'attack':
        case 'life':
            case 'defense':{
            if (form[property]==='') return setErrors({...errors,[property]:`${property} must have a value`}); 
            let value=form[property];//validar que sea entero
            value=Number(value);
            if (isNaN(value) || value<1 || value>top) return setErrors({...errors,[property]:`${property} must be an integer between 1 and ${top}`}); 
            return setErrors({...errors,[property]:''});
        }
        case 'height':
        case 'weight':
        case 'speed':{
            if (form[property]==='') return setErrors({...errors,[property]:`${property} must have a value`}); 
            let value=form[property];//validar que sea entero
            value=Number(value);
            if (isNaN(value) || value<0 || value>top) return setErrors({...errors,[property]:`${property} must be an integer between 0 and ${top}`}); 
            return setErrors({...errors,[property]:''});
    
        }
        case 'types':{
            if (form[property].length) return setErrors({...errors,[property]:''});    
            return setErrors({...errors,[property]:'You must choose at less one type'});
        }
        default:
            return {...errors};        
    }
};
const initialState = (state)=>{
    return {
        name:state==='form' ?'' : ' ',
        image:state==='form' ?'' : ' ',
        life:state==='form' ? '' : ' ',
        attack:state==='form' ? '' : ' ',
        defense:state==='form' ? '' : ' ',
        speed:state==='form' ? '' : ' ',
        height:state==='form' ? '' : ' ',
        weight:state==='form' ? '' : ' ',
        types:state==='form' ? [] : ' ',
    } 
};

const disable = (errors)=>{
    let disabled = true;
    for (let error in errors) {
        if (!errors[error].length) disabled=false;
        else {
            disabled=true;  
            break; 
        }
    };
    return disabled;
};

const getTypes = async()=>{
    const allTypes= (await axios('http://localhost:3001/types')).data;
    console.log('esta es la info: ',allTypes);
    return allTypes;
};

export {validate,initialState,disable,getTypes}