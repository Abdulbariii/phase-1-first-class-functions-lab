// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = (array) => {
  return array.slice(0, 2);
};
console.log(returnFirstTwoDrivers(drivers));
const returnLastTwoDrivers = (array) => {
  return array.slice(-2);
};
console.log(returnLastTwoDrivers(drivers));
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
console.log(selectingDrivers[0], drivers);
const createFareMultiplier = function (x) {
  return function (fare) {
    return fare * x;
  };
};

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler);
const fareTripler = createFareMultiplier(3);
console.log(fareTripler);

const selectDifferentDrivers = function (arr, x) {
  return x(arr);
};
