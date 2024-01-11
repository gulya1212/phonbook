import React, { useState } from "react";

const Phonebook = ({ handleChange }) => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    handleChange(name, num);
    setName("");
    setNum("");
  };
  return (
    <form onSubmit={(e) => handleClick(e)}>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        name="name"
        placeholder="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        onChange={(e) => setNum(e.target.value)}
        value={num}
        type="tel"
        placeholder="number"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button className="button" type="submit">
        add contact{" "}
      </button>
    </form>
  );
};

export default Phonebook;
