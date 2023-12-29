import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import NoteBlock from './NoteBlock';

const NoteDiv = ({ allNotes, isAddTransition, setIsAddTranistion }) => {
  // console.log(allNotes[0].notes);
  return (
    <div className="note-div">
      <TransitionGroup component="div" className="container">
        {allNotes.map((note) => (
          <CSSTransition
            key={note._id}
            in={isAddTransition}
            timeout={300}
            classNames="transition"
          >
            <NoteBlock
              key={note._id}
              id={note._id}
              notes={note.notes}
              author={note.author}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default NoteDiv;
