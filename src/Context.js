import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_CONTACT' :
            return {
                ...state,
                contacts: state.contacts.filter( contact => contact.id !== action.payload )
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts : [
            {id: 1, name: "Vinay Joshi" , email: "vinay01joshi@gmail.com" , phone: '828-9896-858' },
            {id: 2, name: "Tanuja Joshi" , email: "tanuja01joshi@gmail.com" , phone: '868-9896-858' },
            {id: 3, name: "Tanvi Joshi" , email: "tanvi01joshi@gmail.com" , phone: '999-9896-858' },
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;