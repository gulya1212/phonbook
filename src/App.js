import { useEffect, useState } from "react";
import Contacts from "./components/Contacts";
import "./App.css";
import Phonebook from "./components/Phonebook";
import shortid from "shortid";
import Filter from "./components/Filter";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", num: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", num: "443-89-12" },
    { id: "id-3", name: "Eden Clements", num: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", num: "227-91-26" },
  ]);
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [value, setValue] = useState("");

  const handleChange = (name, num) => {
    setName(name);
    setNum(num);
  };
  const handleLoad = () => {
    let isExists = false;
    contacts.forEach((item) => {
      if (item.name === name) {
        alert(`This contact ${name} already exists`);

        isExists = true;
      }
    });

    const newContact = {
      id: shortid.generate(),
      name,
      num,
    };

    !isExists && setContacts((prevState) => [...prevState, newContact]);
  };
  useEffect(() => {
    if (name !== undefined && name !== "") {
      handleLoad();
    }
  }, [name]);

  const handleFilter = (e) => {
    setValue(e.target.value);
  };
  const FILTER = value.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(FILTER)
  );
  const handleDelete = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((item) => item.id !== contactId)
    );
  };

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Phonebook handleChange={handleChange} />
      <h2>Contacts</h2>
      <Contacts contacts={filteredContacts} handleDelete={handleDelete} />
      {contacts.length > 0 ? (
        <Filter handleFilter={handleFilter} value={value} />
      ) : (
        <p className="empty"> Content List is empty</p>
      )}
      <h2>filter</h2>
    </div>
  );
}

export default App;
