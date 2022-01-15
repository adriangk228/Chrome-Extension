//object class to hold each sticky note
    // container object for each webpage, property for URL
    // property containing an array of objects, each sticky note is one object
    // {
    //     "name": URL,
    //     "notes": [{
    //             "position": ,
    //             "timestamp": ,
    //             "text":
    //         }]
    // }

// single page view for all notes
    // container that holds all visual elements
    // sidebar of sites you've taken notes on
        // main box which displays that site's notes in order
        // includes link to site so you can view your notes on the page

    // PRACTICE STUFF: 
        // console.log("Chrome extension go");

        // chrome.runtime.onMessage.addListener(gotMessage);

        // function gotMessage(message, sender, sendResponse) { 
        //     console.log(message.txt);
        //     if (message.txt === "hello") {
        //         let paragraphs = document.getElementsByTagName('p');
        //         for (elt of paragraphs) {
        //             elt.style['background-color'] = '#FF00FF';
        //         }
        //     }
        // }

        // Taken from Script tag in popup.html


const textBox = document.getElementById('textBox');
const button = document.getElementById('button');
const notePad = document.getElementById('notePad');

textBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && textBox.value) {
    inputText(textBox.value);
    textBox.scroll(0, textBox.scrollHeight);
    console.log(textBox);
  }
})

button.addEventListener("mousedown", function () {
  if ('mousedown' && textBox.value) {
    inputText(textBox.value);
    textBox.scroll(0, textBox.scrollHeight);
  }
})

function inputText(input) {
  notePad.innerText += `${input}\n\n`;
  textBox.value = '';
}