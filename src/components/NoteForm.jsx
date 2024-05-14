import React from 'react';

class NoteForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };
  }
  handleSubmit(event) {
    event.preventDefault();
    const { title, body } = this.state;

    this.props.onAddNote({
      id: +new Date(),
      title: title,
      body: body,
      createdAt: new Date(),
      archived: false,
    });

    this.setState({ title: '', body: '' });
  }
  handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === 'title' && value.length > 50) return;

    this.setState({ [name]: value });
  }
  render() {
    const { title, body } = this.state;
    return (
      <div className="note-form">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <h3>Create Note</h3>
          <div className="input-field">
            <input type="text" name="title" placeholder="The Title.." value={title} onChange={this.handleInput.bind(this)} required />
            <span>{title.length} / 50</span>
          </div>
          <div className="input-field">
            <textarea name="body" id="" cols="30" rows="10" placeholder="Fill In The Note" value={body} onChange={this.handleInput.bind(this)} required></textarea>
          </div>
          <div className="input-field">
            <button type="submit" className="note-btn note-btn__submit">
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default NoteForm;
