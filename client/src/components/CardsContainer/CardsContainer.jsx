import Card from '../Card/Card.jsx';
import style from './CardsContainer.module.css'

const CardsContainer = ({pokemonList})=>{
    return (
        <div className={style.mainContainer}>
            <div className ={style.cards}>
                {pokemonList.map((pokemon,index)=>{
                    return <Card
                            id={pokemon.id}
                            key={index}
                            name={pokemon.name}
                            image={pokemon.image}
                            types={pokemon.types}
                    />
                })}
                <div className={style.paginate}>
            </div>
            </div>
        </div>
        );
};

export default CardsContainer;