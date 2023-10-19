const data = { name: 'jordy', color: 'mint' };

const jsonData = JSON.stringify(data);
console.log('json: ', jsonData);

console.log('js object: ', JSON.parse(jsonData));
