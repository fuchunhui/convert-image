/**
 * @file 主控流程
 */

import { convertBMP } from './process/index.js';
import source from './source/index.js'

const control = () => {
  const base64 = convertBMP(source);
  return base64;
};

export default control;
