import style from './Form.module.css';
import { useState } from 'react';
import { initialState, validate, disable } from './formUtils.js';
import InputBox from '../../components/InputBox/InputBox.jsx';
import {createPokemon} from '../../redux/actions.js';
import { useDispatch, useSelector } from 'react-redux';

const Form = () => {
  const [form, setForm] = useState(initialState('form'));
  const [errors, setErrors] = useState(initialState('errors'));
  const dispatch = useDispatch();
  const types = useSelector(state=>state.types);

  const changeHandler = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      const selectedTypes = checked
        ? [...form.types, parseInt(value)]
        : form.types.filter((typeId) => typeId !== parseInt(value));
      setForm({ ...form, types: selectedTypes });
      validate({ ...form, types:selectedTypes}, errors, setErrors, name);
    } else {
      setForm({ ...form, [name]: value });
      validate({ ...form, [name]: value }, errors, setErrors, name);
    }
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createPokemon(form));
    setForm(initialState('form'));
    setErrors(initialState('errors'));
  };
  return (
    <form className={style.formContainer} onSubmit={submitHandler}>
      <h1>CREATE POKEMON</h1>
      <div className={style.inputsContainer}>
        <InputBox state={form} label={'Name'} name={'name'} action={changeHandler} errorProperty={errors.name}/>
        <InputBox state={form} label={'Image'} name={'image'} action={changeHandler} errorProperty={errors.image}/>
        <InputBox state={form} label={'Life'} name={'life'} action={changeHandler} errorProperty={errors.life}/>
        <InputBox state={form} label={'Attack'} name={'attack'} action={changeHandler} errorProperty={errors.attack}/>
        <InputBox state={form} label={'Defense'} name={'defense'} action={changeHandler} errorProperty={errors.defense}/>
        <InputBox state={form} label={'Speed'} name={'speed'} action={changeHandler} errorProperty={errors.speed}/>
        <InputBox state={form} label={'Height'} name={'height'} action={changeHandler} errorProperty={errors.height}/>
        <InputBox state={form} label={'Weight'} name={'weight'} action={changeHandler} errorProperty={errors.weight}/>
      </div>
      <label>Types</label>
      <div className={style.typesContainer}>
        {types.map((type) => (
          <div key={type.id}>
            <input
              type="checkbox"
              name="types"
              value={type.id}
              onChange={changeHandler}
              checked={form.types.includes(type.id)}
            />
          <label>{type.name}</label>
          </div>
        ))}
      </div>
      <label className={style.error}>{errors.types}</label>
      <br />
      <button type="submit" disabled={disable(errors)}>Submit</button>
    </form>
  );
};

export default Form;