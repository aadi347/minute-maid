# Simple Client-Server Application (React.js & Express.js)

A minimal, beginner-friendly client-server application demonstrating communication between a **React.js** frontend (Client) and an **Express.js** backend (Server) using **HTTP GET** and **POST** methods.

---

## 📁 Project Structure

```text
Client-Server/
│
├── backend/
│   ├── package.json        # Express & CORS dependencies
│   └── server.js           # Server logic (Express API endpoints)
│
└── frontend/
    ├── package.json        # React & Vite dependencies
    ├── index.html          # HTML entry point
    ├── vite.config.js      # Vite configuration (port 3000)
    └── src/
        ├── App.jsx         # Main React component (Fetch GET & POST)
        ├── App.css         # Styling
        └── main.jsx        # React root mounting
```

---

## 🚀 How to Run the Application

### 1. Start the Express Server (Backend)
Open a terminal window:
```bash
cd backend
npm install
node server.js
```
> Server runs on: **`http://localhost:5002`**

### 2. Start the React Client (Frontend)
Open a **second** terminal window:
```bash
cd frontend
npm install
npm run dev
```
> Client runs on: **`http://localhost:3000`**

Open **`http://localhost:3000`** in your browser.

---

## 💡 How Communication Works

```text
[ Browser (React Client) ]                 [ Node.js (Express Server) ]
     (Port 3000)                                   (Port 5002)
          │                                             │
          │ ─── 1. HTTP GET (/api/message) ───────────> │
          │ <─── JSON: { message: "Hello..." } ──────── │
          │                                             │
          │ ─── 2. HTTP POST (/api/greet, { name }) ──> │
          │ <─── JSON: { reply: "Hello, Aditya!..." } ─ │
```

### 1. GET Request (Client receives data from Server)
- When the page loads, React's `useEffect` hook automatically fires `fetch('http://localhost:5002/api/message')`.
- The Express server responds with `{ message: "Hello from Express.js Server!" }`.
- React stores this in `serverMessage` state and displays it on the screen.

### 2. POST Request (Client sends data to Server)
- The user enters their name into the input field and clicks **"Send to Server"**.
- React triggers `fetch('http://localhost:5001/api/greet', { method: 'POST', ... })` sending `{ name: inputName }` in JSON format.
- The server extracts `req.body.name`, creates a response `{ reply: "Hello, <name>!..." }`, and returns it.
- React updates `postResponse` state and renders the reply instantly.

---

## 📝 Code Explanation

### Backend: `backend/server.js`
- `const express = require('express')`: Imports Express framework for building HTTP APIs.
- `const cors = require('cors')`: Enables Cross-Origin Resource Sharing so React (port 3000) can make requests to Express (port 5001).
- `app.use(express.json())`: Middleware to parse incoming JSON payloads in POST requests (`req.body`).
- `app.get('/api/message', ...)`: Defines a GET route that sends a JSON response.
- `app.post('/api/greet', ...)`: Defines a POST route that reads `name` from `req.body` and returns a personalized greeting.
- `app.listen(5001, ...)`: Binds and listens for connections on port 5001.

### Frontend: `frontend/src/App.jsx`
- `useState`: Manages dynamic state (server message, user input, server response, connection status).
- `useEffect`: Runs once on mount to initiate communication with the backend.
- `fetch()`: Native JavaScript API used to send asynchronous HTTP GET/POST requests and parse JSON (`res.json()`).

---

## 🖥️ Expected Output

### Terminal 1 (Backend):
```text
Server is running at http://localhost:5001
```

### Terminal 2 (Frontend):
```text
VITE ready in 400 ms
➜  Local:   http://localhost:3000/
```

### Browser (Frontend UI):
1. **Server Status Badge**: Displays `● Express Server Connected (Port 5001)` in green.
2. **GET Card**: Shows `"Hello from Express.js Server!"` fetched automatically on page load.
3. **POST Card**:
   - Typing `"Aditya"` and clicking **"Send to Server"**.
   - Displays: `"Hello, Aditya! Your request was successfully processed by the server."`.
