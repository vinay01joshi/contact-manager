import React, { Component } from 'react';
import Contact from './Contact'; 

 class Contacts extends Component {

    state = {
                contacts : [
                    {id: 1, name: "Vinay Joshi" , email: "vinay01joshi@gmail.com" , phone: '828-9896-858' },
                    {id: 2, name: "Tanuja Joshi" , email: "tanuja01joshi@gmail.com" , phone: '868-9896-858' },
                    {id: 3, name: "Tanvi Joshi" , email: "tanvi01joshi@gmail.com" , phone: '999-9896-858' },
                ]
            }

    render() {
        const { contacts } = this.state;
        return (
            <div>
                { contacts.map(contact => (
                    <Contact key={contact.id} contact={contact} />
                ))}
            </div>
        )
    }
}
export default Contacts;