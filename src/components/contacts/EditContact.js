import React, { Component } from 'react'
import { Consumer } from '../../Context'
import TextInputGroup from '../layout/TextInputGroup'
import axios from 'axios'

class EditContact extends Component {

    state = {
        name : '',
        email :'',
        phone : '',
        errors:{}
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        this.setState({
            name: res.data.name,
            email: res.data.email,
            phone: res.data.phone,
        });
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value});

    onSubmit = async (dispatch,e) =>{
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
                        <div className="card-header">Update</div>
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
                                <input type="submit" value="Update"
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


export default EditContact;
