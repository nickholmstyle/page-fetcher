const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localPath = process.argv[3];
let bytes = url + localPath
console.log(bytes)


request(url, (error, body) => {
  if (error) {
    console.log(`error:`, error);
  }
  fs.writeFile(`${localPath}`, body, function(error) {
    if (error) {
      console.log(`error:, error`);
    } else {
      console.log(`Downloaded and saved ${bytes.length} bytes to ${localPath}`);
    }
  });
});


