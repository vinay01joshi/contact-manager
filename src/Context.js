import React, {Component} from 'react';

const Context = React.createContext();


export class Provider extends Component {
    state = {
        contacts : [
            {id: 1, name: "Vinay Joshi" , email: "vinay01joshi@gmail.com" , phone: '828-9896-858' },
            {id: 2, name: "Tanuja Joshi" , email: "tanuja01joshi@gmail.com" , phone: '868-9896-858' },
            {id: 3, name: "Tanvi Joshi" , email: "tanvi01joshi@gmail.com" , phone: '999-9896-858' },
        ]
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