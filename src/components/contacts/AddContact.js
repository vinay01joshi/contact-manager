import React, { Component } from 'react'
import { Consumer } from '../../Context'
import TextInputGroup from '../layout/TextInputGroup'
import uuid from 'uuid';

class AddContact extends Component {

    state = {
        name : '',
        email :'',
        phone : ''
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    onSubmit = (dispatch,e) =>{
        e.preventDefault();
        const {name, email, phone} = this.state;

        const newContact = {
            id: uuid(), name, email, phone
        };

        dispatch({type: 'ADD_CONTACT' , payload: newContact });

        // Clearing the state after saving the data
        this.setState({
            name :'',
            email: '',
            phone:''
        });
    }

    render() {
        const { name , email , phone } = this.state

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3">
                        <div className="card-header">Add</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                                <TextInputGroup 
                                    label="Name"
                                    name="name"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={this.onChange}
                                />
                                <TextInputGroup 
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={this.onChange}
                                />
                                <TextInputGroup 
                                    label="Phone"
                                    name="phone"
                                    placeholder="Enter Phone"
                                    value={phone}
                                    onChange={this.onChange}
                                />                                
                                <input type="submit" value="Add"
                                    className="btn btn-light btn-block"></input>
                            </form>
                        </div>
                    </div>
                    )
                }}
            </Consumer>
        )
    }
}


export default AddContact;
