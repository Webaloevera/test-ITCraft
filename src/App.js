import React from 'react';
import {AddNote, NotesList, SortNotes} from './components';

import "./styles/app.scss"


function App() {
const [notes, setNotes] = React.useState([
  // {id: Date.now(), title: 'Fizrst', description: 'lorem'},
  // {id: Date.now(), title: 'First', description: 'lorem'},
  // {id: Date.now(), title: 'First', description: 'lorem'},
  // {id: Date.now(), title: 'First', description: 'lorem'}
])

function selectedNote(id) {
  setNotes(
  notes.map(note => {
    if(note.id === id) {
      note.title = '1'
    }
    return note
  })
  )
}

function addNote(title, description) {
  setNotes(notes.concat([{
    id: Date.now(),
    title,
    description
  }]))
}
  return (

    <div className="App">
      <div className="note_wrapper">
        <div className="note_nav">
            <div className="note_nav-list">
            <SortNotes/>
            <button>+ New</button>
            {notes.length ? <NotesList notes={notes} onSelect={selectedNote}/> : <p>No Notes...</p>}
          
            </div>
        </div>
        <AddNote onCreate={addNote}/>
      </div>
    </div>

  );
}

export default App;
