import React from 'react';
import NoteItem from './NoteItem'
import PropTypes from 'prop-types';

const NotesList = (props) => {
    const style = {
        ul: {
            padding: '0px'
        }
    }
return (
    <ul className="note-list" style={style.ul}>
    { props.notes.map((note) => {
        return <NoteItem key={note.id} 
                         note={note}
                         title={note.title}
                         noteClick={props.onSelect}
                         />
                         
    })
    }
    </ul>
)
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default NotesList;