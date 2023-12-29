import React from 'react';

const NoteBlock = ({ id, notes, author }) => {
  // console.log(notes + author);
  return (
    <div className="bg-light border note-block">
      <p>{author}</p>

      <h6>{notes}</h6>
    </div>
  );
};

export default NoteBlock;
