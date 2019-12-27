// const listItemElements = document.querySelectorAll('li');  // Not Live list. Use getElementsByTagName

// Live list.
const listItemElements = document.getElementsByTagName('li');

for (const listItem of listItemElements) {
  console.dir(listItem);
}

// object that contains the li item objects
const ul = document.querySelector('ul');

console.log(ul.children[1].textContent);
