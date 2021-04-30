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
        name: "Jane Doe",
        email: "janedoe@example.com",
        phone: "0213-2093-4923",
        address: "127 Avenue, New Jersey"
      },

      selected_entry: {
        entry: "",
        section: ""
      },

      //education form
      education_form: {
        id: uniqid(),
        edit: false,
        institution: "",
        title: "",
        description: "",
        date: "",
        grade: "",
      },

      //work form
      work_form: {
        id: uniqid(),
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
    console.log(this.state.education_form);
  }

  //sesction is either education or work
  deleteEntry = (id, section) => {
    this.setState({[section]: this.state[section].filter(i => i.id !== id)});
  };

  //education or work
  resetForm = (form_name) => {
    //make copy of the form
    let temp = {...this.state[form_name]};

    // loop through and make each key value blank (except id and edit status);
    for (let key in temp){
      if (key !== "id" && key !== "edit") {
        temp[key] = "";
      }
    }
    this.setState({[form_name]: temp});
  };

  //can shorten this to one line, using destructuring syntax
  resetID = (form_name) => {
    let temp = {...this.state[form_name]};
    temp["id"] = uniqid();
    this.setState({[form_name]: temp});
  }

  //what about selected_entry? ca it accomodate both education nd work?

  toggleEdit = (entry, section) => {
    let form_name = `${section}_form`;

    let promise = new Promise((resolve, reject) => {
      this.setState({selected_entry: {
        entry: entry,
        section: section
      }});
      resolve(true);
    });

    promise.then((response) => {
      this.setState({[form_name]: {...this.state.selected_entry.entry, edit: true}});
    });
  }

  onUpdateForm = (e) => {
    e.preventDefault();
    let entry = this.state.selected_entry.entry;
    let section = this.state.selected_entry.section;
    let form_name = `${section}_form`;
    let index = this.state[section].indexOf(entry);

    let promised_array = new Promise((resolve, reject) => {
      let temp = JSON.parse(JSON.stringify(this.state[section]));
      temp.splice(index, 1, this.state["education_form"]);
      let new_array = this.setState({[section]: temp});
      resolve(new_array);
    });

    promised_array.then((response) => {
      this.resetForm(`education_form`);
      this.resetID(`${section}_form`);
      this.setState({[form_name]: {...this.state[form_name], edit: false}});
    })
  };


  // education, and work???// need to differentiate between save / create
  onSubmitForm = (e) => {
    e.preventDefault();

    const formID = e.target.id;
    if (formID == "education-form"){

      let promised_array = new Promise((resolve, reject) => {
        let entry = this.state.education_form;
        let array = this.setState({education: this.state.education.concat(entry)});
        resolve(array);
      });

      promised_array.then((response) => {
        this.resetForm("education_form");
        this.resetID("education_form");
      });
    }
  }

  render() {
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
        toggleEdit = {this.toggleEdit}
        onUpdate = {this.onUpdateForm}
        />


        <h2>Work</h2>
        <Work />
      </div>
    );
  }

}

export default App;

//at somepoint after edit, fields can go UNDEFINED for no reason
//also, sometimess the object in education array doesnt have the same values as the one in
//the form being changed

// this.setState({education_form: {id: uniqid()}});