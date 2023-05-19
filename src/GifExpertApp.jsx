import React, { useState } from "react";
import {AddCategory , GifGrid} from "./components";
import DeleteCategory from "./components/DeleteCategory";
 
export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories((prevCategories) => [newCategory, ...prevCategories]);
  };

  const deleteAll = () => {
    setCategories([]);
  };

  const deleteCurrent = () => {
    setCategories((prevCategories) => prevCategories.slice(1));
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />
      <DeleteCategory onDeleteAll={deleteAll} onDeleteCurrent={deleteCurrent} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
