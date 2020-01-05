import React, { Component } from 'react';
import Contact from './Contact'; 
import {Consumer} from '../../Context'
 class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        // Replacing Div element with React.Fragment as we do not need extra div inside the contacts element
                        // to do so we are using React.Fragment
                        <React.Fragment>
                            <h1 className="display-4 mb-2">
                                <span className="text-primary">
                                    Contact
                                </span> List
                            </h1>
                            { contacts.map(contact => (
                                <Contact key={contact.id} contact={contact} />
                            ))}
                            
                        </React.Fragment>
                    ) 
                }}
            </Consumer>
        )
    }
}
export default Contacts;