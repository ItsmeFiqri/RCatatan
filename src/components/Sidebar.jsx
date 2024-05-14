import React from 'react';

function Sidebar({ type, setNoteType }) {
  return (
    <div className="sidebar">
      <div>
        <h1>Personal Note</h1>
      </div>
      <div>
        <ul>
          <li>
            <a href="#" className={type === 'notes' ? 'active' : ''} onClick={() => setNoteType('notes')}>
              Notes
            </a>
          </li>
          <li>
            <a href="#" className={type === 'archived' ? 'active' : ''} onClick={() => setNoteType('archived')}>
              Notes Archive
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
