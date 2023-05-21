import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

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
    <Form onSubmit={onSubmit}>
    <Form.Group controlId="categoryInput">
      <Form.Control
        type="text"
        placeholder="Buscar GIF's"
        value={inputValue}
        onChange={onInputChange}
      />
    </Form.Group>
    <Button variant="primary" type="submit">Agregar</Button>
  </Form>
  );
};

export default AddCategory;
