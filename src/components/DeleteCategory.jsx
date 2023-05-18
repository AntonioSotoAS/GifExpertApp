

 export const DeleteCategory = ({ onDeleteCurrent, onDeleteAll }) => {
    const DeleteCurrent = (event) => {
        event.preventDefault();
        onDeleteCurrent();
      };
    
      const DeleteAll = (event) => {
        event.preventDefault();
        onDeleteAll();
      };
  
    return (
      <div>
        <button onClick={DeleteCurrent}>Eliminar elemento actual</button>
        <button onClick={DeleteAll}>Eliminar todo</button>
      </div>
    );
  };
  
  export default DeleteCategory;