import React, {Component} from "react"

class General extends Component {
    constructor(props){
        super(props)
    }

    toggleInput = (fieldID) => {
        //toggle input field and mask
        console.log("yessir");
        document.getElementById("mask").style.display="block";
        document.getElementById(fieldID).style.display = "block";
        document.getElementById(fieldID).focus();
    }

    hideInput = () => {
        console.log("mask");
        //to close all input
        document.getElementById("mask").style.display = "none";
        Array.from(document.getElementsByTagName("input")).forEach(function(item, index) {
            item.style.display="none";
        });
    }

    render(){

        const { name, email, phone, address } = this.props.info;
        const { change } = this.props

        return(
            <div id="header">
                <div id="name-container">
                    <input 
                    onChange={ change }
                    value={ name }
                    type="text"
                    id="name"
                    name="general"
                    />
                </div>

                <div id="contact-info">
                    <input 
                    onChange={change}
                    value={address}
                    type="text"
                    id="address"
                    name="general"
                    />

                    <input 
                    onChange={change}
                    value={email}
                    type="text"
                    id="email"
                    name="general"
                    />

                    
                    <input 
                    onChange={change}
                    value={phone}
                    type="text"
                    id="phone"
                    name="general"
                    />  

                </div>

                

                
            </div>
        );
    }
}

export default General;
