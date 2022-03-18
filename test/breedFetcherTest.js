const {fetchBreedDescription} = require('../breedFetcher.js');
const {assert} = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('siberian', (error, description) => {
      assert.equal(error, null);
      const breedDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(breedDescription, description.trim());
      done();
    });
  });

  it('returns error if breed does not exist, via callback', (done) => {
    fetchBreedDescription('zxcvbds', (error, description) => {
      assert.equal(description, null);
      const expectedError = "Cannot find the breed you're looking for";
      assert.equal(error, expectedError);
      done();
    });
  });
});