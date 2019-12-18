import React, {Component} from 'react';
import Note from "./components/Note";
import './App.css';
import logo from './logo.png'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noteText: '',
            notes: [],
        }
    }

    updateNoteText(noteText) {
        this.setState({noteText: noteText.target.value})
    }

    addNote() {

        if (this.state.noteText === '') {
            return
        }

        let notesArray = this.state.notes;
        notesArray.push(this.state.noteText);
        this.setState({noteText: ''});
        this.textInpunt.focus();
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            let notesArray = this.state.notes;
            notesArray.push(this.state.noteText);
            this.setState({noteText: ''});
        }
    }

    deleteNote(index) {
        let notesArray = this.state.notes;
        notesArray.splice(index, 1);
        this.setState({notes: notesArray})
    }

    render() {
        let notes = this.state.notes.map((val, key) => {
            return <Note key={key} text={val}
                         deleteMethod={() => this.deleteNote(key)}/>
        })
        return (
            <div className="container">

                <div className="header">DoesItDone<img className="logo" src={logo} alt=""/></div>
                {notes}

                <div className="button" onClick={this.addNote.bind(this)}>+</div>

                <input type="text"
                       ref={((input) => {
                           this.textInpunt = input
                       })}
                       className="textInput"
                       value={this.state.noteText}
                       onChange={noteText => this.updateNoteText(noteText)}
                       onKeyPress={this.handleKeyPress.bind(this)}
                />
            </div>
        );
    }
}

export default App;
