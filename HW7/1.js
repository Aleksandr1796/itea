let authorSelect = document.getElementById('author');
    messageText = document.getElementById('message');
    submit = document.getElementById('button');


let when = new Date();

class Message{
  constructor(id, author, text, date, answers){
    this.id = id;
    this.author = authorSelect.value;
    this.text = messageText.value;
    this.date =`${when.getDate()}/${when.getMonth()}/${when.getFullYear()}`;
  }
}


let allMessages = [];
let answerBlock = document.getElementById('answers');


