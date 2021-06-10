import { useState } from "react";

function Form({ handleSubmit }) {

  const [formState, setFormState] = useState({});

  function handleChange(e) {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value}));
  }

  return (
    <>
    {console.log(formState)}
      <form action="" onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formState);
        
      }}>
        <label htmlFor="localisation">localisation</label>
        <input onChange={handleChange} type="text" id="localisation" name="localisation" />
        <label htmlFor="nom">nom</label>
        <input  onChange={handleChange} type="text" id="nom" name="nom" />
        <label htmlFor="surface">surface</label>
        <input onChange={handleChange} type="number" id="surface" name="surface" />
        <label htmlFor="ville">ville</label>
        <input onChange={handleChange} type="text" id="ville" name="ville" />
        <button type="submit">Créer</button>
      </form>
    </>
  );
}

export default Form;
