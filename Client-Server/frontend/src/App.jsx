import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [reply, setReply] = useState('');


  useEffect(() => {
    fetch('http://localhost:5002/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.log(err));
  }, []);


  const sendName = () => {
    fetch('http://localhost:5002/api/greet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: name }),
    })
      .then((res) => res.json())
      .then((data) => setReply(data.reply))
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Client Server Demo</h1>


      <h2>Server Message (GET):</h2>
      <p>{message}</p>

      <hr />

  
      <h2>Send Name (POST):</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={sendName}>Submit</button>


      <h3>Response from Server:</h3>
      <p>{reply}</p>
    </div>
  );
}

export default App;
