import React, { useState, useEffect } from 'react';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core/'
import './App.css';
import Message from './Message'
import db from './firebase'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('message').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => {
        return doc.data();
      }))
    })
  })
  useEffect(() => {
    setUsername(prompt('Enter your name: '));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, { username: username, message: input }]);
    setInput('')
  }
  return (
    <div className="App" >

      <h1>Hello 🚀! </h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input}
            onChange={event => setInput(event.target.value)} />

          <Button disabled={!input}
            type="submit"
            variant="contained"
            color="primary"
            onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      {
        messages.map(message => {

          return (
            <Message
              username={username}
              message={message} />
          )
        })
      }
    </div >
  );
}

export default App;
