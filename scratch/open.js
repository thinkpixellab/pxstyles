const path = require('path');
const INDEX_PATH = 'file://' + path.resolve(__dirname, './index.html');
const opn = require('better-opn');

opn(INDEX_PATH);
