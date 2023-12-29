import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import NoteInput from './components/NoteInput';
import NoteDiv from './components/NoteDiv';
import Footer from './components/Footer';

function App() {
  const [allNotes, setNotes] = useState([]);
  const [isAddTransition, setIsAddTransition] = useState(false);

  useEffect(() => {
    axios
      .get('https://scaler-dec-bootcamp.herokuapp.com')
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [allNotes]);

  function handleAdd(newItem) {
    axios
      .post('https://scaler-dec-bootcamp.herokuapp.com', newItem)
      .then(function (response) {
        console.log(response, 'post');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <Header />
      <NoteInput
        allNotes={allNotes}
        handleAdd={(newItem) => handleAdd(newItem)}
        setIsAddTransition={(boolValue) => setIsAddTransition(boolValue)}
      />
      <NoteDiv
        allNotes={allNotes}
        isAddTransition={isAddTransition}
        setIsAddTransition={(boolValue) => setIsAddTransition(boolValue)}
      />
      <Footer />
    </div>
  );
}

export default App;
