// Code your solution in this file!

function distanceTravelledInFeet(start, destination) {
 return Math.abs(start - destination) * 264; 
 
}

function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination)  > 400) {
  return 0;
} else {
  return 'cannot travel that far';
}}