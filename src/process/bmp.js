import * as child from 'child_process';
import * as fs from 'fs';
import { named, writeImg, removeImg } from '../convert/write.js';
import { convert } from '../convert/base64.js'

const convertBMP = base64 => {
  const fileName = named();
  writeImg(base64, fileName);
  return evoke(fileName);
};

const evoke = fileName => {
  const str = child.execFileSync('python3', ['src/process/convert.py', 'output', fileName]);
  const filePath = `output/${fileName}`;
  if (fs.existsSync(`${filePath}.jpg`)) {
    removeImg(`${filePath}.bmp`);
    return convert(`${filePath}.jpg`);
  }
  return '';
}

export {
  convertBMP
}