import React from 'react';

function NoteFormSearch({ search, onSearchNote }) {
  return (
    <div className="note-form__search">
      <input type="search" name="search" placeholder="Search The Notes...." value={search} onChange={(event) => onSearchNote(event.target.value)} />
    </div>
  );
}

export default NoteFormSearch;
