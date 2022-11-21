import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getFilter, getItems } from 'redux/selectors';
import { Wraper, ContactItem, ContactText, DelButton, Text } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    
     const normalizedFilter = filter.toLowerCase()
     return contacts.filter(contact =>
     contact.name.toLowerCase().includes(normalizedFilter))
  }

  const visibleContacts = getVisibleContacts();

  return (
      <>
        <Wraper>
            {visibleContacts.map(({ id, name, number, }) => (
                <ContactItem key={id} >
                    <ContactText>{name}: {number}</ContactText>
                    <DelButton type="button" onClick={() => dispatch(deleteContact(id))}>x</DelButton>
                </ContactItem>
            ))}
      </Wraper>
       {contacts.length === 0 && (
      <Text >No contacts available</Text>)}</>
    )
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;