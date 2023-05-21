import { Button } from "react-bootstrap";


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
        <Button variant="danger" onClick={DeleteCurrent}>Eliminar elemento actual</Button>
      <Button variant="danger" onClick={DeleteAll}>Eliminar todo</Button>
      </div>
    );
  };
  
  export default DeleteCategory;