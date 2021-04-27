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
                    <div className="field-container">
                        <p onClick={()=>this.toggleInput("name")}>{name}</p>
                        <input 
                        onChange={change}
                        type="text"
                        id="name"
                        name="general"
                        />
                    </div>
                </div>

                <div id="contact-info">
                    <div className="field-container">
                        <p onClick={()=>this.toggleInput("address")}>{address}</p>
                        <input 
                        onChange={change}
                        type="text"
                        id="address"
                        name="general"
                        />
                    </div>

                    <p className="dash">  -  </p>

                    <div className="field-container">
                        <p onClick={()=>this.toggleInput("email")}>{email}</p>
                        <input 
                        onChange={change}
                        type="text"
                        id="email"
                        name="general"
                        />
                    </div>

                    <p className="dash">  -  </p>

                    <div className="field-container">
                        <p onClick={()=>this.toggleInput("phone")}>{phone}</p>
                        <input 
                        onChange={change}
                        type="text"
                        id="phone"
                        name="general"
                        />  
                    </div>

                </div>

                <div id="mask" onClick={()=>this.hideInput()}></div>
            </div>
        );
    }
}

export default General;

//name email phone number