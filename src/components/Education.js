import React, {Component} from "react"

class Education extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const { form, entries, change, onSubmit, destroy, toggleEdit, onUpdate } = this.props;

        let formFunction;
        let buttonName;

        if (form.edit === false) {
            formFunction = onSubmit;
            buttonName = "Create";
        } else {
            formFunction = onUpdate;
            buttonName = "Update";
        };

        return(
            <div className="section">

                <form id="education-form" onSubmit={formFunction}>
                    <label htmlFor="institution">Institution: </label>
                    <input
                    onChange={change}
                    value={form.institution || ""}
                    type="text"
                    id="institution"
                    name="education_form"
                    /> 

                    <label htmlFor="title">Title: </label>
                    <input
                    onChange={change}
                    value={form.title || ""}
                    type="text"
                    id="title"
                    name="education_form"
                    /> 

                    <label htmlFor="description">Description: </label>
                    <textarea
                    onChange={change}
                    value={form.description || ""}
                    type="text"
                    id="description"
                    name="education_form"
                    />

                    <label htmlFor="date">Date: </label>
                    <input
                    onChange={change}
                    value={form.date || ""}
                    type="text"
                    id="date"
                    name="education_form"
                    />

                    <label htmlFor="grade">Grade: </label>
                    <input
                    onChange={change}
                    value={form.grade || ""}
                    type="text"
                    id="grade"
                    name="education_form"
                    />

                    <button type="submit">{buttonName}</button>
                </form>

                <div className="entries">
                    <h2>Education</h2>
                    {entries.map((entry) => {
                        return (
                        <div key={entry.id} className="item">
                            <p>{entry.institution}</p>
                            <p>{entry.title}</p>
                            <p>{entry.description}</p>
                            <p>{entry.date}</p>
                            <p>{entry.grade}</p>
                            
                            <button onClick={() => toggleEdit(entry, "education")}>Edit</button>
                            <button onClick={() => destroy(entry.id, "education")}>Delete</button>
                        </div>)
                    })}
                </div>
                
            </div>

            
        );
    }
}

export default Education;