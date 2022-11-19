import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import Form from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, TitleContact } from './App.styled';

const INIT_CONTACTS = [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ]
export const App = () => {
    const [contacts, setContacts] = useLocalStorage('contacts', INIT_CONTACTS) 
    const [filter, setFilter] = useState('');
  
  
    
  const addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,

    }

    contacts.find(contact => contact.name === name)
      ? alert(`${name} is already in contacts.`)
      : setContacts(contacts => [...contacts, contact],
        );
    }
  
   
  const deleteContacts = contactId => {
    setContacts(contacts.filter(({ id }) => id !== contactId)
    )
  }

  const changeFilter = event => {
    setFilter(event.currentTarget.value)
  }
  
  const getVisibleContacts = () => {
     const normalizedFilter = filter.toLowerCase()
     return contacts.filter(contact =>
     contact.name.toLowerCase().includes(normalizedFilter))
  }


    
     
     const visibleContacts = getVisibleContacts()
     return (
     
    <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={addContact} /> 

        <TitleContact>Contacts</TitleContact>
         
        <Filter value={filter} onChange={changeFilter} />
        
        <ContactList contacts={visibleContacts} onDeleteContact={deleteContacts} />
    </Container>
    
      
    
    )
  
};

