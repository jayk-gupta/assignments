
const fs = require('fs')
const express = require('express')
const app = express()

console.log('start reading file');
fs.readFile('a.txt', 'utf-8', (err, data) => {
  console.log('files has been read');
  console.log(data);
})

for (let i = 0; i < 10000000; i++){
  
}









const PORT = 3000

// app.listen(PORT, () => {
//   console.log(`app running on port ${PORT}`);
// })