import React, {Component} from "react"

class Education extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { form, entries, change, onSubmit, destroy, edit } = this.props;
        //entries are an array of objects

        return(
            <div>

                <form id="education-form" onSubmit={onSubmit}>
                    <label htmlFor="institution">Institution: </label>
                    <input
                    onChange={change}
                    value={form.institution}
                    type="text"
                    id="institution"
                    name="education_form"
                    /> 

                    <label htmlFor="title">Title: </label>
                    <input
                    onChange={change}
                    value={form.title}
                    type="text"
                    id="title"
                    name="education_form"
                    /> 

                    <label htmlFor="description">Description: </label>
                    <input
                    onChange={change}
                    value={form.description}
                    type="text"
                    id="description"
                    name="education_form"
                    />

                    <label htmlFor="date">Date: </label>
                    <input
                    onChange={change}
                    value={form.date}
                    type="text"
                    id="date"
                    name="education_form"
                    />

                    <label htmlFor="grade">Grade: </label>
                    <input
                    onChange={change}
                    value={form.grade}
                    type="text"
                    id="grade"
                    name="education_form"
                    />

                    <button type="submit">Save</button>
                </form>
                {entries.map((entry) => {
                    return (
                    <div key={entry.id}>
                        <p>{entry.institution}</p>
                        <p>{entry.title}</p>
                        <p>{entry.description}</p>
                        <p>{entry.date}</p>
                        <p>{entry.grade}</p>
                        <p>{entry.id}</p>
                        <button onClick={() => edit(entry)}>Edit</button>
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