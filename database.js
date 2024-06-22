let pets = [
  {
    id: 1,
    name: 'Spot',
    age: 2,
    breed: 'Dalmatian',
    description: 'Spot is an energetic puppy who seeks fun and adventure!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    url: 'https://placedog.net/500/280',
  },
  {
    id: 2,
    name: 'Shadow',
    age: 4,
    breed: 'Border Collie',
    description:
      'Eager and curious, Shadow enjoys company and can always be found tagging along at your heels!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    url: 'https://placedog.net/540/205',
  },
  {
    id: 3,
    name: 'Snowflake',
    age: 1,
    breed: 'Tabby',
    description:
      'Snowflake is a playful kitten who loves roaming the house and exploring.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    url: 'https://placekitten.com/500/500',
  }
];

let currentId = 4

function getPets() {
  return pets;
}
exports.getPets = getPets;

function getPet(id) {
return pets.find(pet => pet.id == id);
}
exports.getPet = getPet;

function addPet(pet) {
pets.push({
  ...pet,
  id: currentId,
  // name: pet.name,
  // age: pet.age,
  // breed: pet.breed,
  // description: pet.description,
  // url: pet.url,
});
currentId++;
}
exports.addPet = addPet;

function deletePet(id) {
pets = pets.filter(pet => pet.id != id);
}
exports.deletePet = deletePet;