import React, {Component} from "react"

class Education extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { entries, destroy } = this.props;
        //entries are an array of objects

        return(
            <div>
                {entries.map((entry) => {
                    return (
                    <div key={entry.id}>
                        <p>{entry.institution}</p>
                        <p>{entry.title}</p>
                        <p>{entry.description}</p>
                        <p>{entry.date}</p>
                        <p>{entry.grade}</p>
                        <p>{entry.id}</p>
                        <button>Edit</button>
                        <button onClick={() => destroy(entry.id, "education")}>Delete</button>
                    </div>)
                })}
            </div>

            
        );
    }
}

export default Education;

//(school name, title of study, date of study)
//can have multiple education entered ofc
//map over educaiton array, output each object into div p tags