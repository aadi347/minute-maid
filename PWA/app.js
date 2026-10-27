if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log('Service Worker Registered'))
        .catch((err) => console.log('Service Worker Error', err));
}

function updateOnlineStatus() {
    const statusElem = document.getElementById('status');
    if (navigator.onLine) {
        statusElem.textContent = 'Status: You are Online (Assets Cached)';
        statusElem.className = 'status-box online';
    } else {
        statusElem.textContent = 'Status: You are Offline (Running from Cache)';
        statusElem.className = 'status-box offline';
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);
updateOnlineStatus();

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    const list = document.getElementById('noteList');
    list.innerHTML = '';
    notes.forEach((note) => {
        const li = document.createElement('li');
        li.textContent = note;
        list.appendChild(li);
    });
}

function saveNote() {
    const input = document.getElementById('noteInput');
    const note = input.value.trim();
    if (!note) return;

    const notes = JSON.parse(localStorage.getItem('notes') || '[]');
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    input.value = '';
    loadNotes();
}

loadNotes();
