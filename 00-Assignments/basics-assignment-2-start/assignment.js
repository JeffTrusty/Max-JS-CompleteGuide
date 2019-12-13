const task3Element = document.getElementById('task-3');

function hello() {
  alert('Hi there!');
}

function greeting(name) {
  alert('Hello ' + name);
}

function task4(word1, word2, word3) {
  alert(word1 + ' ' + word2 + ' ' + word3);
}

hello();
greeting('Jeff');
task3Element.addEventListener('click',hello);
task4('why', 'Hello', 'there');
