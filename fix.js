const fs = require('fs');

const path = './app/randomization_in_progress/page.tsx';
let data = fs.readFileSync(path, 'utf8');

// replace style strings
data = data.replaceAll(
  `style="font-variation-settings: 'FILL' 1;"`,
  `style={{ fontVariationSettings: "'FILL' 1" }}`
);

// replace class with className
data = data.replaceAll('class="', 'className="');

// handle HTML comments
data = data.replaceAll('<!--', '{/*');
data = data.replaceAll('-->', '*/}');

// handle disabled boolean
data = data.replaceAll('disabled=""', 'disabled={true}');

fs.writeFileSync(path, data);
console.log('Fixed JSX syntax!');
