import React, {Component} from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import CV from "./CV.js"

class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const { general, education_entries, work_entries, skills } = this.props;

        return(
            <PDFViewer>
                <CV

                general = {general}
                education_entries = {education_entries}
                work_entries = {work_entries}
                skills = {skills}

                />
            </PDFViewer>
        )
    }
}

export default Preview;