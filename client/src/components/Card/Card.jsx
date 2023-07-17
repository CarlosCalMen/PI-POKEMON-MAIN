import style from './Card.module.css';
import {Link} from 'react-router-dom'

const Card = ({id,name,image,types})=>{
    return (
        <div className={style.card}>
             <Link to={`/detail/${id}`}>{name}</Link>
            <img className = {style.image}src={image} alt={name} />
            {types.map(type=><p>{type}</p>)}
        </div>
    );
};

export default Card;