import React from "react";
import iconDelete from "../delete.png";
const btnDelete = ({ handleDelete, id }) => {
  return (
    <button onClick={() => handleDelete(id)}>
      <img className="iconDelete" src={iconDelete} alt="icon-delete" />
    </button>
  );
};

export default btnDelete;
