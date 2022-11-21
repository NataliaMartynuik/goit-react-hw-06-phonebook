
import Form from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, Title, TitleContact } from './App.styled';


const App = () => {
  return (
     
    <Container>
        <Title>Phonebook</Title>
        <Form /> 

        <TitleContact>Contacts</TitleContact>
         
        <Filter />
        
        <ContactList />
    </Container>
    );
}
   
export default App;