import React from "react";
import BtnDelete from "./btnDelete";
const Contacts = ({ contacts, handleDelete }) => {
  const contactElem = contacts.map((contact) => (
    <li className="item" key={contact.id}>
      {contact.name}:{contact.num}
      <BtnDelete handleDelete={handleDelete} id={contact.id} />
    </li>
  ));

  return (
    <>
      <ul>{contactElem}</ul>
    </>
  );
};

export default Contacts;
