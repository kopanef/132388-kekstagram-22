
import {createPhoto} from './utils.js';

const PHOTO_COUNT = 25;
new Array(PHOTO_COUNT).fill(null).map((element, index) => createPhoto(index));



