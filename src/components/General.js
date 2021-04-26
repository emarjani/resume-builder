import React, {Component} from "react"

class General extends Component {
    constructor(props){
        super(props)
    }

    render(){

        const { firstName, lastName, email, phone, address } = this.props.info;
        const { change } = this.props

        return(
            <div id="general section">
                <form>
                    <label htmlFor="firstName">First Name: </label>
                    <input 
                    onChange={change}
                    type="text"
                    id="firstName"
                    name="general"
                    />
                    <label htmlFor="lastName">Last Name: </label>
                    <input 
                    onChange={change}
                    type="text"
                    id="lastName"
                    name="general"
                    />
                    <label htmlFor="address">Address: </label>
                    <input 
                    onChange={change}
                    type="text"
                    id="address"
                    name="general"
                    />
                    <label htmlFor="email">Email: </label>
                    <input 
                    onChange={change}
                    type="text"
                    id="email"
                    name="general"
                    />
                    <label htmlFor="phone">Phone: </label>
                    <input 
                    onChange={change}
                    type="text"
                    id="phone"
                    name="general"
                    />  
                </form>

                <p>First Name: {firstName} </p>
                <p>Last Name: {lastName} </p>
                <p>Address: {address}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
            </div>
        );
    }
}

export default General;

//name email phone number