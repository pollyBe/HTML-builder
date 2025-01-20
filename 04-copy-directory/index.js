/* eslint-disable prettier/prettier */
const path = require('path');
const fs = require('fs');
const fsp = fs.promises;
const folder = path.resolve(__dirname, 'files');
const folderCopy = path.resolve(__dirname, 'files-copy');
const copyDir = async () => {
  try {
    const files = await fsp.readdir(folder);
    await fsp.mkdir(folderCopy, { recursive: true });
    await Promise.all(
      files.map(async (file) => {
        const originFile = path.join(folder, file);
        const copyFile = path.join(folderCopy, file);
        await fsp.copyFile(originFile, copyFile);
      }),
    );
    console.log('Done');
  } catch (err) {
    console.error('Copy error:', err);
  }
};
copyDir();
