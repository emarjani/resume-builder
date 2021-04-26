import './App.css';

import React, {Component} from "react"
import General from "./components/General.js"
import Education from "./components/Education.js"
import Work from "./components/Work.js"

import uniqid from "uniqid";
// import Form from "./components/Form.js"

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      general: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
      },

      //id for both school and work
      id: uniqid(),

      //education form
      education_form: {
        institution: "",
        title: "",
        description: "",
        date: "",
        grade: ""
      },

      //work form
      work_form: {
        company: "",
        title: "",
        date: ""
      },

      //to store entries
      education: [],
      work: []
    }
  }

  //field should be the name of field of cv
  //handles general
  handleChange = (e) => {
    const name = e.target.name;
    const field = e.target.id;
    const value = e.target.value;
    
    this.setState({
      [name]: {...this.state[name], [field]: value}
    });
    
  }

  //search school and work for id. if matches, delete that entry.
  //sesction is either education or work
  deleteEntry = (id, section) => {
    this.setState({[section]: this.state[section].filter(i => i.id !== id)});
  };

  //needs to select correct form. grab object. fill fields with respective thing. edit object
  //NOT delete and create a new one (id shud be the same)
  editEntry = () => {

  };

  //for school
  createSchoolEntry = (school, title, desc, date, grade, id=this.state.id) => {
    //this func to create school/work hash, then insert in respective array
    const obj = {
      institution: school,
      title: title,
      description: desc,
      date: date,
      grade: grade,
      id: id
    };
    return obj;
  }


  // education, and work???/
  onSubmitForm = (e) => {
    e.preventDefault();

    const formID = e.target.id;
    console.log(formID);
    if (formID == "education-form"){
      const { institution, title, description, date, grade } = this.state.education_form;
      let entry = this.createSchoolEntry(institution, title, description, date, grade);
      this.setState({education: this.state.education.concat(entry)});
    }

    //reset form (not owrking for some reason??)
    document.getElementById(formID).reset();
    //reset id
    this.setState({id: uniqid()});
  }

  render(){
    return (
      // edit cv button here?
      <div className="App">
        <h1>CV Builder</h1>

        <General info={this.state.general} change={this.handleChange}/>

        <h2>Education</h2>
        <form id="education-form" onSubmit={this.onSubmitForm}>
          <label htmlFor="institution">Institution: </label>
          <input
          onChange={this.handleChange}
          value={this.state.education_form.institution}
          type="text"
          id="institution"
          name="education_form"
          /> 

          <label htmlFor="title">Title: </label>
          <input
          onChange={this.handleChange}
          value={this.state.education_form.title}
          type="text"
          id="title"
          name="education_form"
          /> 

          <label htmlFor="description">Description: </label>
          <input
          onChange={this.handleChange}
          value={this.state.education_form.description}
          type="text"
          id="description"
          name="education_form"
          />

          <label htmlFor="date">Date: </label>
          <input
          onChange={this.handleChange}
          value={this.state.education_form.date}
          type="text"
          id="date"
          name="education_form"
          />

          <label htmlFor="grade">Grade: </label>
          <input
          onChange={this.handleChange}
          value={this.state.education_form.grade}
          type="text"
          id="grade"
          name="education_form"
          />

          <button type="submit">Save</button>
        </form>

        <Education entries={this.state.education} destroy={this.deleteEntry}/>


        <h2>Work</h2>
        <Work />
      </div>
    );
  }

}

//insitution title date grade description(conditional rendering?)

export default App;

//form needs button to add extra fields for education and work
//should probably make form into another component

