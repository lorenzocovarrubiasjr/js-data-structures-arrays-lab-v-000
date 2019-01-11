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
  const new_array = [drivers, ...driver];
  new_array
}

function prependDriver(driver) {
  const new_array = [driver, drivers];
  new_array
}

function removeLastDriver() {
  const new_array = drivers.slice(-1)
  new_array
}
