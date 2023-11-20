'use strict'
var gVendors = ['audu-mea', 'fiak-ibasa', 'subali-pesha', 'mitsu-bashi']

_createCars()
var gCars
console.log(gCars)

function getCars() {
  return gCars
}

function _createCars() {
  gCars = []
  for (var i = 0; i < 30; i++){
    gCars.push(_createCar())
  }
}

function _createCar() {

  return {
    id: makeId(),
    title: gVendors[getRandomInt(0, gVendors.length)],
    descLength: getRandomIntInclusive(1, 3),
    price: getRandomIntInclusive(2000, 10000)
  }
}