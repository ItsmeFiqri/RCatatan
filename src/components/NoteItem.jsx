import React from 'react';
import { showFormattedDate } from '../utils/index';

function NoteItem({ note, onDeleteNote, onArchiveNote, type }) {
  return (
    <div className="note-item">
      <div className="note-wrapper">
        <div className="note-item__title">{note.title}</div>
        <div className="note-item__date">{showFormattedDate(note.createdAt)}</div>
        <div className="note-item__body">{note.body}</div>
        <div className="note-item__action">
          <button type="button" className="note-btn note-btn__delete" onClick={() => onDeleteNote(note.id, note.title)}>
            Delete
          </button>
          <button type="button" className="note-btn note-btn__archive" onClick={() => onArchiveNote(note.id, note.title, type)}>
            {type === 'notes' ? 'Archive' : 'Archive'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
