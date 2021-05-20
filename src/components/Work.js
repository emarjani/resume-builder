import React, {Component} from "react"

class Work extends Component {
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
                <form id="work-form" onSubmit={formFunction}>
                    <label htmlFor="company">Company Name: </label>
                    <input
                    onChange={change}
                    value={form.company || ""}
                    type="text"
                    id="company"
                    name="work_form"
                    /> 

                    <label htmlFor="position">Position: </label>
                    <input
                    onChange={change}
                    value={form.position || ""}
                    type="text"
                    id="position"
                    name="work_form"
                    /> 

                    <label htmlFor="tasks">Tasks: </label>
                    <textarea
                    onChange={change}
                    value={form.tasks || ""}
                    type="text"
                    id="tasks"
                    name="work_form"
                    />

                    <label htmlFor="dateOfWork">Date: </label>
                    <input
                    onChange={change}
                    value={form.dateOfWork || ""}
                    type="text"
                    id="dateOfWork"
                    name="work_form"
                    />

                    <button type="submit">{buttonName}</button>
                </form>
                <div className="entries">
                    <h2>Work</h2>
                    {entries.map((entry) => {
                        
                        return (
                        <div key={entry.id} className="item">
                            <p>{entry.company}</p>
                            <p>{entry.position}</p>
                            <p>{entry.tasks}</p>
                            <p>{entry.dateOfWork}</p>

                            <button onClick={() => toggleEdit(entry, "work")}>Edit</button>
                            <button onClick={() => destroy(entry.id, "work")}>Delete</button>
                        </div>)
                    })}
                </div>
            </div>
        );
    }
}

export default Work;