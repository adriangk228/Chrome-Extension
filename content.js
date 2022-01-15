document.addEventListener('DOMContentLoaded', () => {
  const notePad = new Notepad();
  const textBox = document.getElementById('textBox');
  const button = document.getElementById('button');

  textBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && textBox.value) {
      notePad.addNote(textBox.value);
      textBox.scroll(0, textBox.scrollHeight);
      textBox.value = ''
      // console.log(textBox);
    }
  })

  button.addEventListener("mousedown", function () {
    if ('mousedown' && textBox.value) {
      notePad.addNote(textBox.value);
      textBox.scroll(0, textBox.scrollHeight);
      textBox.value = ''
    }
  })
})