import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactForm, ContactLabel, ContactInput, ContactButton } from './ContactForm.styled';

const nameInputId = nanoid();
const numberInputId = nanoid();

export default function Form({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

   const handleSubmit = event => {
        event.preventDefault();
        onSubmit({ name, number})
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
                
      </ContactForm>  
        )
  


}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};