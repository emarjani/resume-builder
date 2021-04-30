import React, {Component} from "react"

class EducationForm extends Component {
    constructor(props){
        super(props)
    }


    create = () => {
        const { form, onSubmit, change } = this.props;

        return(
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
        )
    }

    edit = () => {
        //form is the form value holder, on edit will handle edit, change will handle change field
        const { form, onEdit, change, entry} = this.props;

        //repopulate fields with CORRECT values from the object.
        //maybe that requires DIRECTLY changin education form values, to entry values?
        console.log(entry);

        return( 
        <form id="education-form" onSubmit={onEdit}>
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
        )

    }

    render(){

        //pass in either edit true or edit false. 

        //can render one of two forms, based on if edit status if false or true
        
        const {form} = this.props;
        if (form.edit === false) {
            return this.create();
        } else {
            return this.edit();
        }

    }
}

export default EducationForm;

