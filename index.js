const {fetchBreedDescription} = require('./breedFetcher.js');

fetchBreedDescription('siberian', (error, description) => {
  if (error) {
    console.log('error fetch details', error);
  } else {
    console.log(description);
  }
});