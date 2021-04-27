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
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "0813-2093-4923",
        address: "127 Avenue, New Jersey"
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
        duties: "",
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

  //sesction is either education or work
  deleteEntry = (id, section) => {
    this.setState({[section]: this.state[section].filter(i => i.id !== id)});
  };

  //take in id and changed info, and array, change accordingly
  editEntry = (value, id, array) => {
    
  }

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


  // education, and work???// need to differentiate between save / create
  onSubmitForm = (e) => {
    e.preventDefault();

    const formID = e.target.id;
    if (formID == "education-form"){
      //check if 
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
      
      <div className="App">
        <h1>CV Builder</h1>

        <General info={this.state.general} change={this.handleChange}/>

        <h2>Education</h2>
        

        <Education 
        form = {this.state.education_form}
        entries={this.state.education}

        change = {this.handleChange}
        onSubmit = {this.onSubmitForm}
        destroy={this.deleteEntry}
        edit={this.editSchoolEntry}/>


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

