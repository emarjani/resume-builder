import React, {Component} from "react"

class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        const { form, entries, change, onSubmit, destroy } = this.props;

        return(
            <div id="skills">
                <form id="skills-form" onSubmit={onSubmit}>
                    <label htmlFor="skill">Skill: </label>
                    <input
                    onChange={change}
                    value={form.skill}
                    type="text"
                    id="skill"
                    name="skills_form"
                    /> 
                    <button type="submit">Submit</button>
                </form>

                <ul>
                    {entries.map((entry) => {
                        return(
                            <li id={entry.key}>
                                <p>{entry.skill}</p>
                                <button onClick={() => destroy(entry.id, "skills")}>
                                    Delete
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            
        )    
    }
}

export default Skills;