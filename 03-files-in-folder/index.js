/* eslint-disable prettier/prettier */
const path = require('path');
const fs = require('fs');
const os = require('os');
const { stdin, stdout } = process;

const dir = path.join(__dirname, 'secret-folder');

fs.readdir(dir, { withFileTypes: true }, (err, files) => {
  if (err) console.log(err.message);
  files.forEach((file) => {
    if (file.isFile()) {
      const dirFile = path.join(dir, file.name);
      const fileName = path.parse(dirFile).name;
      const fileExt = path.parse(dirFile).ext.slice(1);
      fs.stat(dirFile, (err, stats) => {
        if (err) console.log(err.message);
        stdout.write(`${fileName} - ${fileExt} - ${stats.size / 1000}kb\n`);
      });
    }
  });
});
