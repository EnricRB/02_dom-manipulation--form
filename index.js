document.querySelector('#note-form').addEventListener('submit', function(event) {

    event.preventDefault(); 

    const title = window.document.querySelector("#note-title").value;
    const content = window.document.querySelector("#note-content").value;
    const priority = window.document.querySelector('#note-priority').value;
    const button = window.document.querySelector("#note-button").value;
    
    const note = document.createElement('div');
    note.classList.add('note');

    note.innerText = `
        <h3>${title}</h3>
        <p>${content}</p>
        <p><strong>Priority:</strong> ${priority.charAt(0).toUpperCase() + priority.slice(1)}</p>
    `;
    //añadir las notas.
    document.getElementById('notes-container').appendChild(note);

    //reset formulari.
    document.getElementById('noteForm').reset();
});
