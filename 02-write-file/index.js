/* eslint-disable prettier/prettier */
const { stdin, stdout, exit } = process;
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const pathFile = path.join(__dirname, 'text.txt');
const input = readline.createInterface(stdin);
const output = fs.createWriteStream(pathFile);
stdout.write('Nice to meet you! Write something, please\n');
const exitProcess = () => {
  stdout.write('\n Thank you! Have a nice day! \n');
  exit();
};
input.on('line', (message) => {
  if (message === 'exit') exitProcess();
  output.write(`${message} `);
});
process.on('SIGINT', exitProcess);
