import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, type, onDeleteNote, onArchiveNote }) {
  return (
    <div>
      {notes.length > 0 ? (
        <div className="note-list">
          {notes.map((note, i) => (
            <NoteItem key={i} note={note} onDeleteNote={onDeleteNote} onArchiveNote={onArchiveNote} type={type} />
          ))}
        </div>
      ) : (
        <div className="text-center">
          <h3>No Notes Found</h3>
        </div>
      )}
    </div>
  );
}

export default NoteList;
