let pageURL;
chrome.tabs.query({ active: true, currentWindow: true }, tabs => pageURL = tabs[0].url);

let pageNotes;
chrome.storage.sync.get(pageURL, function(notes) {
  return pageNotes = notes;
})


const notePad = document.getElementById('notePad');
const textBox = document.getElementById('textBox');
const button = document.getElementById('button');

textBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && textBox.value) {
    notePad.addNote(textBox.value);
    textBox.scroll(0, textBox.scrollHeight);
    // console.log(textBox);
  }
})

button.addEventListener("mousedown", function () {
  if ('mousedown' && textBox.value) {
    addNote(textBox.value);
    textBox.scroll(0, textBox.scrollHeight);
  }
})