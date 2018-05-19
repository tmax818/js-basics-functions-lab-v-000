// Code your solution in this file!

function distanceTravelledInFeet(start, end) {
 return Math.abs(start - end) * 264; 
 
}

function distanceFromHqInBlocks(block) {
  return Math.abs(42 - block);
}

function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}