import React from 'react';
import { getData } from '../utils/index';
import Sidebar from './Sidebar';
import Container from './Container';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NoteFormSearch from './NoteFormSearch';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getData(),
      type: 'notes',
      search: '',
      title: '',
      body: '',
    };
  }

  setNoteType(type) {
    this.setState({ type: type, search: '' });
  }

  handleSearchNote(value) {
    this.setState({ search: value });
  }

  handleDeleteNote(id, title) {
    const confirmation = window.confirm(`Delete [ ${title} ]?`);
    if (confirmation) {
      this.setState((prevState) => {
        const notes = prevState.notes.filter((note) => note.id !== id);
        return {
          notes: notes,
        };
      });
    }
  }

  handleArchiveNote(id, title, actionType = 'archived') {
    const confirmation = window.confirm(`Move To Note [ ${title} ] ke ${actionType === 'archived' ? 'arsip' : 'Notes Active'}?`);
    if (confirmation) {
      this.setState((prevState) => {
        const notes = prevState.notes.map((note) => {
          if (note.id === id) note.archived = true;
          return note;
        });
        return {
          notes: notes,
        };
      });
    }
  }

  handleAddNote(formNoteData) {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, formNoteData],
      };
    });

    alert('Note Saved SuccessFully!!');
  }

  render() {
    const { notes, type, search } = this.state;
    const filteredNotes = notes.filter((note) => {
      const archiveCondition = type === 'archived' ? note.archived : !note.archived;
      const searchCondition = search.length > 0 ? note.title.toLowerCase().includes(search.toLowerCase()) : true;

      return archiveCondition && searchCondition;
    });
    return (
      <div id="note-app">
        <Sidebar type={type} setNoteType={this.setNoteType.bind(this)} />
        <Container>
          {type === 'notes' ? <NoteForm onAddNote={this.handleAddNote.bind(this)} /> : ''}
          <h2>New Notes</h2>
          <NoteFormSearch search={search} onSearchNote={this.handleSearchNote.bind(this)} />
          <NoteList notes={filteredNotes} type={type} onDeleteNote={this.handleDeleteNote.bind(this)} onArchiveNote={this.handleArchiveNote.bind(this)} />
        </Container>
      </div>
    );
  }
}

export default NoteApp;
