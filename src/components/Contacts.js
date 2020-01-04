import React, { Component } from 'react';
import Contact from './Contact'; 

 class Contacts extends Component {

    state = {
                contacts : [
                    {id: 1, name: "Vinay Joshi" , email: "vinay01joshi@gmail.com" , phone: '828-9896-858' },
                    {id: 2, name: "Tanuja Joshi" , email: "tanuja01joshi@gmail.com" , phone: '868-9896-858' },
                    {id: 3, name: "Tanvi Joshi" , email: "tanvi01joshi@gmail.com" , phone: '999-9896-858' },
                ]
            };
    
    deleteContact = (id) => {
        console.log('Id which gonna be deleted', id);
        const { contacts } = this.state;

        const newContacts = contacts.filter( contact => contact.id !== id) ;

        this.setState({
            contacts : newContacts
        })

    }

    render() {
        const { contacts } = this.state;
        return (
            // Replacing Div element with React.Fragment as we do not need extra div inside the contacts element
            // to do so we are using React.Fragment
            <React.Fragment>
                { contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />
                ))}
                
            </React.Fragment>
        )
    }
}
export default Contacts;