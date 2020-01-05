import React, { Component } from 'react'

class AddContact extends Component {
    
    constructor(props) {
        super(props);

        this.nameInput = React.createRef();
        this.emailInput = React.createRef();
        this.phoneInput = React.createRef();
    }
    
    onSubmit = (e) =>{
        e.preventDefault();        
        const contact = {
            name : this.nameInput.current.value,
            email : this.emailInput.current.value,
            phone : this.phoneInput.current.value,
        }
        console.log('Submited value', contact);
    }

    static defaultProps = {
        name : 'Vinay Joshi' ,
        email: 'vinay001joshi@gmail.com',
        phone : '777-7777-777'
    }

    render() {
        const { name , email , phone } = this.props
        return (
            <div className="card mb-3">
                <div className="card-header">Add</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Name"
                                name="name"
                                defaultValue={name}
                                ref={this.nameInput}
                                ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input 
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Email"
                                name="email"
                                defaultValue={email}
                                ref={this.emailInput}
                                ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input 
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Phone"
                                name="phone"
                                defaultValue={phone}
                                ref={this.phoneInput}
                                ></input>
                        </div>
                        <input type="submit" value="Add"
                            className="btn btn-light btn-block"></input>
                    </form>
                </div>
            </div>
        )
    }
}


export default AddContact;
