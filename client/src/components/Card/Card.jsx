import style from './Card.module.css';

const Card = ({id,name,image,types})=>{
    return (
        <div className={style.card}>
            <img src={image} alt={name} />
            <p>{name}</p>
            {types.map(type=><p>{type}</p>)}
        </div>
    );
};

export default Card;