window.document.querySelector('#note-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const title = window.document.querySelector("#note-title").value;
    const content = window.document.querySelector("#note-content").value;
    const priority = window.document.querySelector('#note-priority').value;

    const note = document.createElement('div');
    note.classList.add('note');

    const noteTitle = document.createElement('div');
    noteTitle.classList.add('note-title');
    noteTitle.innerText = title;

    const noteContent = document.createElement('div');
    noteContent.classList.add('note-content');
    noteContent.innerText = content;

    const notePriority = document.createElement('div');
    notePriority.classList.add('note-priority');
    notePriority.innerText = `Priority: ${priority.charAt(0).toUpperCase() + priority.slice(1)}`;

    // Append each part to the note container
    note.appendChild(noteTitle);
    note.appendChild(noteContent);
    note.appendChild(notePriority);

    // Add the note to the notes container
    document.getElementById('notes-container').appendChild(note);

    // Reset the form
    document.getElementById('note-form').reset();
});


// Detectar la preferencia
function applyTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Escuchar cambios en la preferencia de color del usuario
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (event.matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

// Aplicar el tema al cargar la página
applyTheme();