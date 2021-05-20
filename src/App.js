import './App.css';

import React, {Component} from "react"
import General from "./components/General.js"
import Education from "./components/Education.js"
import Work from "./components/Work.js"
import Skills from "./components/Skills.js"

import uniqid from "uniqid";

import Preview from "./components/Preview.js"
import CV from "./components/CV.js"

import ReactDOM from 'react-dom';
import ReactPDF from '@react-pdf/renderer';
// education: [],
//       work: [],
//       skills: []

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      general: {
        name: "Jane Doe",
        email: "janedoe@example.com",
        phone: "0813-2093-4923",
        address: "Jakarta, Indonesia"
      },

      //select entries, to be edited. will store this selected entry.
      selected: {
        education: "",
        work: ""
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
        edit: false,
        company: "",
        position: "",
        tasks: "",
        dateOfWork: ""
      },

      skills_form: {
        id: uniqid(),
        skill: ""
      },

      education: [{
        id: uniqid(),
        edit: false,
        institution: "ABC University",
        title: "BSc Computer Science",
        description: "Minor in Cybersecurity",
        date: "2010-2014",
        grade: "3.7 GPA"
      }],

      work: [{
        id: uniqid(),
        edit: false,
        company: "Virtual Company",
        position: "Junior Software Engineer",
        tasks: "Designed and establishhed user-friendly websites, including optimized checkout pages, resulting in a 25% increase in user clicks.",
        dateOfWork: "2015-2019"
      },
      {
        id: uniqid(),
        edit: false,
        company: "Web Company ",
        position: "Web Developer",
        tasks: "Designed and establishhed user-friendly websites, including optimized checkout pages, resulting in a 25% increase in user clicks.",
        dateOfWork: "2019-2020"
      },
      {
        id: uniqid(),
        edit: false,
        company: "Prestgious Software Company",
        position: "Senior Software Engineer",
        tasks: "Designed and establishhed user-friendly websites, including optimized checkout pages, resulting in a 25% increase in user clicks.",
        dateOfWork: "2020-present"
      },
      ],
      
      skills: [
        {id: uniqid(), skill: "HTML/CSS"},{id: uniqid(), skill: "Javascript"},{id: uniqid(), skill: "Ruby on Rails"},
        {id: uniqid(), skill: "jQuery"},{id: uniqid(), skill: "SQL"},{id: uniqid(), skill: "Wordpress"},
      
      ]
    }
  }

  //as soon as component mounted, render pdf view
  componentDidMount(){
    ReactDOM.render(
      <Preview 
  
      general = {this.state.general}
      education_entries = {this.state.education}
      work_entries = {this.state.work}
      skills = {this.state.skills}
  
      />, document.getElementById('template')
      );
  }


  handleChange = (e) => {
    const name = e.target.name;
    const field = e.target.id;
    const value = e.target.value;
    
    this.setState({
      [name]: {...this.state[name], [field]: value}
    });
  }

  //sesction is either education or work or skills
  deleteEntry = (id, section) => {
    this.setState({[section]: this.state[section].filter(i => i.id !== id)});
  };

  //education or work
  resetForm = (form_name) => {
    let temp = {...this.state[form_name]};

    // loop through and make each key value blank (except id and edit status);
    for (let key in temp){
      if (key !== "id" && key !== "edit") {
        temp[key] = "";
      }
    }
    this.setState({[form_name]: temp});
  };

  resetID = (form_name) => {
    let temp = {...this.state[form_name]};
    temp["id"] = uniqid();
    this.setState({[form_name]: temp});
  }

  toggleEdit = (entry, section) => {
    let form_name = `${section}_form`;

    let promise = new Promise((resolve, reject) => {
      this.setState({
        selected: {...this.state.selected, [section]: entry}
      });
      resolve(true);
    });

    promise.then((response) => {
      //form should be filled with entry information, and the form edit status should be changed to true
      this.setState({[form_name]: {...this.state.selected[section], edit: true}});
    });
  }

  onUpdateForm = (e) => {
    e.preventDefault();

    let section = e.target.id.split("-")[0];
    let entry = this.state.selected[section];
    let form_name = `${section}_form`;
    let index = this.state[section].indexOf(entry);

    let promised_array = new Promise((resolve, reject) => {
      let temp = JSON.parse(JSON.stringify(this.state[section]));
      temp.splice(index, 1, this.state[form_name]);
      let new_array = this.setState({[section]: temp});
      resolve(new_array);
    });

    promised_array.then((response) => {
      //these may not occur in order
      this.resetForm(form_name);
      this.resetID(form_name);
      this.setState({[form_name]: {...this.state[form_name], edit: false}});
    })
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    let section = e.target.id.split("-")[0];
    let form_name = `${section}_form`;

    let promised_array = new Promise((resolve, reject) => {
      let entry = this.state[form_name];
      let array = this.setState({[section]: this.state[section].concat(entry)});
      resolve(array);
    });

    promised_array.then((response) => {
      this.resetForm(form_name);
      this.resetID(form_name);
    });
  }

  renderPreview = () => {
    ReactDOM.render(
        <Preview 
    
        general = {this.state.general}
        education_entries = {this.state.education}
        work_entries = {this.state.work}
        skills = {this.state.skills}
    
        />, document.getElementById('template')
    )
  }

  render() {
    return (
      
      <div className="App">
        
        <div id="content">
          
          <div id="resume-maker">
            <h1>CV Builder</h1>
            <General info={this.state.general} change={this.handleChange}/>

            <Education 
            form = {this.state.education_form}
            entries={this.state.education}

            change = {this.handleChange}
            onSubmit = {this.onSubmitForm}
            destroy={this.deleteEntry}
            toggleEdit = {this.toggleEdit}
            onUpdate = {this.onUpdateForm}
            />

            <Work 
            form= {this.state.work_form}
            entries= {this.state.work}

            change= {this.handleChange}
            onSubmit= {this.onSubmitForm}
            destroy= {this.deleteEntry}
            toggleEdit= {this.toggleEdit}
            onUpdate= {this.onUpdateForm}
            />

            <Skills
            form = {this.state.skills_form}
            entries= {this.state.skills}

            change= {this.handleChange}
            onSubmit= {this.onSubmitForm}
            destroy= {this.deleteEntry}
            />

            
          </div>
          
          <div id="template-container">
            <button onClick={this.renderPreview}>Update Preview</button>
            <div id="template">
            </div>
          </div>    
        </div>
      </div>  
    );
  }

}

export default App;
