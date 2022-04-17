// import { nanoid } from 'nanoid';
import { Form } from './FormPage/Form';
import Layout from './Layout/Layout';
import Contacts from './ContactsPage/Contacts';
import { Routes, Route } from 'react-router-dom';




export const App = () => {
  

  // const contactsChange = (newName, number) => {
  //   const newObj = { id: nanoid(), name: newName, number: number };
  //   if (
  //     contacts.find(({ name }) => newName.toLowerCase() === name.toLowerCase())
  //   ) {
  //     return alert(`${newName} is already in contacts`);
  //   }
  //   setContacts(prevState => [...prevState, newObj]);
  // };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Form  />} />
        <Route
          path="contacts"
          element={
            <Contacts  />
          }
        />
      </Route>
    </Routes>
  );
};
