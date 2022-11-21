import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, ContactLabel, ContactInput, ContactButton } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';
import { getItems } from 'redux/selectors';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const nameInputId = nanoid();
const numberInputId = nanoid();

export const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(getItems);

   const handleSubmit = event => {
     event.preventDefault();
     const contact = {
      id: nanoid(),
      name,
      number,

    }

      contacts.find(contact => contact.name === name)
       ? toast.info(`${name} is already in contacts.`)
       : dispatch(addContacts(contact));
      reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (
          <ContactForm onSubmit={handleSubmit}>
          <ContactLabel htmlFor={nameInputId}>
            Name
          </ContactLabel>
          <ContactInput
  type="text"
  name="name"
  value={name}
  onChange={e => setName(e.currentTarget.value)}                 
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  id={nameInputId}                  
          />
       <ContactLabel htmlFor={numberInputId}>
            Number
          </ContactLabel>    
         <ContactInput
  type="tel"
  name="number"
  value={number}
  onChange={e => setNumber(e.currentTarget.value)}                 
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  id={numberInputId}
                />
  <ContactButton type="submit">Add contact</ContactButton>
  <ToastContainer position="top-center" autoClose={2000} />              
      </ContactForm>  
        )
 }

export default Form;