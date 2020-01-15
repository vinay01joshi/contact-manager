import React, { Component } from 'react'
import { Consumer } from '../../Context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

class AddContact extends Component {

    state = {
        name : '',
        email :'',
        phone : '',
        errors:{}
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    onSubmit = (dispatch,e) =>{
        e.preventDefault();
        const {name, email, phone} = this.state;
        if(name === '') {
            this.setState({errors : {
                name : 'Name is required'
            }});
            return;
        }
            
        if(email === '') {
            this.setState({errors : {
                email : 'Email is required'
            }});
            return;
        }
            
        if(phone === '') {
            this.setState({errors : {
                phone : 'Phone is required'
            }})
            return;
        }        
        const newContact = {
            name, email, phone
        };

        axios.post('https://jsonplaceholder.typicode.com/users',newContact)
            .then(res => dispatch({type: 'ADD_CONTACT', payload: res.data }))

        // Clearing the state after saving the data
        this.setState({
            name :'',
            email: '',
            phone:'',
            errors:{}
        });

        // Redirectiong back to main List
        this.props.history.push('/');
    }

    render() {
        const { name , email , phone , errors } = this.state        
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
                                    error={errors.name}
                                />
                                <TextInputGroup 
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                />
                                <TextInputGroup 
                                    label="Phone"
                                    name="phone"
                                    placeholder="Enter Phone"
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
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
