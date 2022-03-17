const request = require('request');
const breed = process.argv.slice(2)[0];


request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (body === '[]') {
    console.log('Cannot find the breed you\'re looking for');
  } else if (response === undefined) {
    console.error(error);
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});
