import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [todos, setTodos] = useState(['Study React', 'Prepare for Exam']);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  return (
    <div style={{ padding: '25px', maxWidth: '700px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Single Page Application (SPA)</h1>
      <p>Demonstrating dynamic content rendering and user interaction in React.</p>

    
      <div style={{ marginTop: '15px', marginBottom: '15px' }}>
        <button onClick={() => setActiveTab('home')}>Home</button>{' '}
        <button onClick={() => setActiveTab('counter')}>Counter</button>{' '}
        <button onClick={() => setActiveTab('todos')}>To-Do List</button>{' '}
        <button onClick={() => setActiveTab('about')}>About</button>
      </div>

      <hr />

     
      {activeTab === 'home' && (
        <div>
          <h2>Home View</h2>
          <p>Notice that switching tabs changes the view instantly without refreshing the browser!</p>

          <h3>Live User Interaction:</h3>
          <input
            type="text"
            placeholder="Type your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {name && <p>Hello, <strong>{name}</strong>!</p>}
        </div>
      )}

      {activeTab === 'counter' && (
        <div>
          <h2>Counter View</h2>
          <p>Current Count: <strong>{count}</strong></p>
          <button onClick={() => setCount(count + 1)}>Increment (+1)</button>{' '}
          <button onClick={() => setCount(count - 1)}>Decrement (-1)</button>{' '}
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      )}

      {activeTab === 'todos' && (
        <div>
          <h2>To-Do List View</h2>
          <input
            type="text"
            placeholder="Enter a new task"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodo}>Add Task</button>

          <ul>
            {todos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'about' && (
        <div>
          <h2>About SPA</h2>
          <p>
            A Single Page Application dynamically rewrites the existing web page with new data from
            the React state, instead of downloading complete HTML pages from a server.
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
