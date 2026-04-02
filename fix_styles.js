const fs = require('fs');
const path = './app/randomization_in_progress/page.tsx';
let data = fs.readFileSync(path, 'utf8');

data = data.replaceAll(
  `style="font-variation-settings: 'FILL' 1;"`,
  `style={{ fontVariationSettings: "'FILL' 1" }}`
);

fs.writeFileSync(path, data);
console.log('Fixed exactly just the styles.');
