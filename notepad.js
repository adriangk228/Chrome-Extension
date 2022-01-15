const body = document.querySelector('body');

class Notepad {

    constructor(URL) {
        const notePad = document.createElement("div");
        notePad.className = "notePad"
    
        let text = pageNotes || '';
        Array.isArray(text) ? text.forEach(x => notePad.appendChild(document.createTextNode(x))) 
        : notePad.appendChild(document.createTextNode(text));

        let textBox = document.createElement("input");
        textBox.setAttribute("type", "text");
        textBox.id = "textBox";
        notePad.appendChild(textBox);

        let subButton = document.createElement("button");
        subButton.id = "button"
        subButton.textContent = "Post Note";
        notePad.appendChild(subButton);

        body.appendChild(notePad);
    }

    addNote(str) {
        pageNotes = [...pageNotes, str]
        chrome.storage.sync.set({pageURL: pageNotes}, function() {
            console.log("Note added")
        })
        let newNote = document.createTextNode(str);
        notePad.insertBefore(newNote, textBox);
    }