const buttons = document.querySelectorAll('button');

// button.onclick = function() {

// };

const buttonClickHandler = event => {
  event.target.disabled = true;
  console.log(event.target.dataset.url);
  console.log(event.target.dataset.pwd);
  copyStringToClipboard(event.target.dataset.pwd);
  // setTimeout(() => {
  //   copyStringToClipboard(' ');
  // }, 2000);
  window.open(event.target.dataset.url, '_blank');
  console.log(event);
};

// const anotherButtonClickHandler = () => {
//   console.log('This was clicked!');
// };

// button.onclick = buttonClickHandler;
// button.onclick = anotherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener('click', buttonClickHandler);
// }, 2000);

buttons.forEach(btn => {
  btn.addEventListener('click', buttonClickHandler);
});

function copyStringToClipboard(str) {
  // Create new element
  var el = document.createElement('textarea');
  // Set value (string to be copied)
  el.value = str;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute('readonly', '');
  el.style = {
    position: 'absolute',
    left: '-9999px'
  };
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand('copy');
  // Remove temporary element
  document.body.removeChild(el);
}
