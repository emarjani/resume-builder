import React, {Component} from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    page: {
        paddingHorizontal: 5,
        paddingTop: 40,
        paddingBottom: 20,
        height: "100vh",
        flexDirection: 'column',
        justifyContent: 'space-between',
    },

    employeeInfo: {
        marginTop: "0.3cm",
        fontSize: "0.45cm",
        flexDirection: 'row',
        justifyContent: 'center',
        color: "rgb(57, 148, 119)"
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        padding: 10,
        backgroundColor: "rgb(226, 245, 239)",
        flexGrow: 4
        
    },

    sectionTitle: {
        width: "3cm",
        color: "rgb(19, 102, 76)"
    },

    sectionInfo: {
        flexDirection: 'column',
        width: "16cm",
        marginBottom: "0.5cm",
        borderLeft: "1px solid rgb(136, 136, 136)",
        paddingLeft: "0.5cm"
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        fontSize: "0.6cm",
        marginBottom: "0.15cm"
    },

    subheader: {
        color: "rgb(54, 54, 54)",
        flexDirection: "row",
        fontSize: "0.45cm",
        marginBottom: "0.3cm"
    },

    description: {fontSize: "0.45cm"},

    date: {fontSize: "0.5cm"}
});

class CV extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        
        const { general, education_entries, work_entries, skills } = this.props;

        return(
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={{flexDirection: 'column', alignItems: 'center', flexGrow: 1}}>
                        <Text style={{fontSize: "1cm"}}>{general["name"]}</Text>
                        <View style={styles.employeeInfo}>
                            <Text>{general["phone"]}</Text>
                            <Text style={{marginHorizontal: "0.4cm"}}>-</Text>
                            <Text>{general["email"]}</Text>
                            <Text style={{marginHorizontal: "0.4cm"}}>-</Text>
                            <Text>{general["address"]}</Text>
                        </View>
                    </View>

                    <View style={styles.section}>
                        
                        <Text style={styles.sectionTitle}>Education</Text>
                        
                        <View style={styles.sectionContainer}>
                            {education_entries.map(entry => {
                                return (
                                    <View style={styles.sectionInfo}>
                                        <View style={styles.header}>
                                            <Text>{entry["title"]}</Text>
                                            <Text style={styles.date}>{entry["date"]}</Text>
                                        </View>
                                        <View style={styles.subheader}>
                                            <Text style={{marginRight: "0.25cm"}}>{entry["institution"]}</Text>
                                            <Text>{entry["grade"]}</Text>
                                        </View>
                                        <Text style={styles.description}>
                                            {entry["description"]}
                                        </Text>
                                    </View>
                                )
                            })}
                        </View>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Work</Text>
                        <View style={styles.sectionContainer}>
                            {work_entries.map(entry => {
                                return (
                                    <View style={styles.sectionInfo}>
                                        <View style={styles.header}>
                                            <Text>{entry["position"]}</Text>
                                            <Text style={styles.date}>{entry["dateOfWork"]}</Text>
                                        </View>

                                        <View style={styles.subheader}>
                                            <Text>{entry["company"]}</Text>
                                        </View>
                                    
                                        <Text style={styles.description}>
                                            {entry["tasks"]}
                                        </Text>
                                        
                                    </View>
                                    
                                )
                            })}
                        </View>
                    </View>

                    <View style={[styles.section, {flexGrow: 1}]}>
                        <Text style={styles.sectionTitle}>Skills</Text>
                        
                        <View style={[styles.sectionInfo, {fontSize: "0.5cm"}]}>
                            {skills.map(entry => {
                                return(
                                    <Text>{entry.skill}</Text>
                                )
                            })}
                        </View>
                    </View>
                </Page>
            </Document>
        )
    }
}

export default CV;