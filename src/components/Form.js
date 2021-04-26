import React, {Component} from "react"

class Form extends Component {
    constructor(props){
        super(props)
    }

    render(){


        // based on number of fields in this.props.cv.education, add fields
        const { general, education , work } = this.props.cv;


        return(    

            <form>
                <div className="general section">
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name"/><br/>

                    <label htmlFor="email">Email: </label>
                    <input type="text" id="email"/><br/>

                    <label htmlFor="phone">Phone: </label>
                    <input type="text" id="phone"/><br/>
                </div>

                <div className="education section">
                    <button id="add-school">Add</button>

                    
                </div>

                <div className="work section">
                    <button id="add-work">Add</button>

                </div>

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;

// {education.map((item)=>{
//     return (<p></p>)
// })}