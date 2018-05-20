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
  const distance = distanceTravelledInFeet(start, destination);
  const adjDistance = distance - 400;
  if (distance < 400) {
  return 0;
  } else if (adjDistance > 400 && adjDistance < 2000 ){
    return distance * 0.02;
  }}