import React, { useState, useEffect } from 'react';
import { Button, Input, FormControl, InputLabel } from '@material-ui/core/'
import './App.css';
import Message from './Message'

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['a', 'b', 'c']);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Enter your name: '));
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, input]);
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
          return <Message text={message} />
        })
      }
    </div >
  );
}

export default App;
