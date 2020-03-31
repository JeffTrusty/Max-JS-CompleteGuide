const fs = require('fs');

fs.writeFile('userData.txt', 'userName=Jeff', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Successfully wrote to file');
  }
});

fs.readFile('userData.txt', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});
