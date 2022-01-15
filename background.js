//creating a button that when pressed, causes the content.js script to run
//first thing we need to do is tell manifest.json about the background script

console.log('background running');

//chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tab) {
//     let msg = {
//         txt: "hello"
//     }
//     chrome.tabs.sendMessage(tab.id, msg);
// }
