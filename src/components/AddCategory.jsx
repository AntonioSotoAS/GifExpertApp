import React, { useState } from "react";

  export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={ onSubmit }>
      <input
        type="text"
        placeholder="Buscar GIF's"
        value={inputValue}
        onChange={onInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddCategory;
