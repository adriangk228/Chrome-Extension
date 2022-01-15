chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ savedNotes: {} });
});

// let pageURL;



// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){pageURL = tabs[0].url});

// let pageNotes;
// chrome.storage.sync.get({[pageURL]: ''}, function(notes) {
//   pageNotes = Object.values(notes);
// })

// let pageNotes;
// chrome.storage.local.get([pageURL] = '', function(notes) {
//   pageNotes = Object.values(notes);
// })

async function getCurrentTab() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }



class Notepad {

    constructor() {

        let cache, address;

        getCurrentTab().then(tab => {
            address = tab.url;
            chrome.storage.sync.get(savedNotes, function(result) {
                cache = result[savedNotes]
            })
        })

        this.notes = cache[address] || [];

        const body = document.querySelector('body');
        const notePad = document.createElement("div");
        notePad.className = "notePad";

        const noteContainer = document.createElement("div");
        noteContainer.id = "noteContainer";
        notePad.appendChild(noteContainer);
    
        let text = [...this.notes];
        text.forEach(x => noteContainer.appendChild(document.createTextNode(x)));

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

        chrome.storage.sync.set()

        const newNote = document.createTextNode(str + "\n\n");
        document.getElementById("noteContainer").appendChild(newNote);
    }
}