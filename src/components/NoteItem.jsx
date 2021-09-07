import React from 'react';
import PropTypes from 'prop-types';

const NoteItem = ({note, noteClick}) => {
    
    const style = {
        li: {
        border: '1px solid #fff',
        padding: '15px 20px',
        width: '200px',
        textAlign: 'center',
        marginBottom: '20px',
        wordWrap:"break-word",
        fontSize: "14px"
        }
    }
    return (
        <li onClick={() => noteClick(note.id)} style={style.li}>{note.title}</li>
    )
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired
}


export default NoteItem;