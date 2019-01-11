// Write your solution here!
let drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(driver) {
  return drivers.push(driver);
}

function destructivelyPrependDriver(driver){
  return drivers.unshift(driver);
}

function destructivelyRemoveFirstDriver() {
  return drivers.shift();
}

function appendDriver(driver) {
  return new_array = [drivers, ...driver];
}