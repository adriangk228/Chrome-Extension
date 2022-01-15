let pageURL;
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){pageURL = tabs[0].url});

// let pageNotes;
// chrome.storage.sync.get({[pageURL]: ''}, function(notes) {
//   pageNotes = Object.values(notes);
// })

let pageNotes;
chrome.storage.local.get([pageURL] = '', function(notes) {
  pageNotes = Object.values(notes);
})

class Notepad {

    constructor() {
        const body = document.querySelector('body');
        const notePad = document.createElement("div");
        notePad.className = "notePad";

        const noteContainer = document.createElement("div");
        noteContainer.id = "noteContainer";
        notePad.appendChild(noteContainer);
    
        let text = pageNotes || '';
        Array.isArray(text) ? text.forEach(x => noteContainer.appendChild(document.createTextNode(x))) 
        : noteContainer.appendChild(document.createTextNode(text));

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
        pageNotes = [].concat(pageNotes, str);
        const updated = {};
        updated[pageURL] = pageNotes;
        chrome.storage.local.set(updated, function() {
            console.log("Note added")
        })
        localStorage.setItem(pageURL, pageNotes);
        const newNote = document.createTextNode(str + "\n\n");
        document.getElementById("noteContainer").appendChild(newNote);
    }
}