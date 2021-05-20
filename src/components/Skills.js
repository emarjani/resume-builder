import React, {Component} from "react"

class Skills extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        const { form, entries, change, onSubmit, destroy } = this.props;

        return(
            <div className="section">
                <form id="skills-form" onSubmit={onSubmit}>
                    <label htmlFor="skill">Skill: </label>
                    <input
                        onChange={change}
                        value={form.skill}
                        type="text"
                        id="skill"
                        name="skills_form"
                        /> 
                    <button type="submit">Create</button>
                </form>

                <div className="entries">
                    <h2>Skills</h2>
                    <div className="skills">
                        {entries.map((entry) => {
                            return(
                                <li id={entry.id} className="item">
                                    
                                    <p>{entry.skill}</p>
                                    <button onClick={() => destroy(entry.id, "skills")}>
                                        Delete
                                    </button>

                                </li>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        )    
    }
}

export default Skills;