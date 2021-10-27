'use strict';
console.log(getDiagonal(twoD([11,2,4,4,5,6,10,8,-12])))

let diagonals = getDiagonal(twoD([11,2,4,4,5,6,10,8,-12]));
console.log(Math.abs(diagonals.rightDiagonal - diagonals.leftDiagonal));

function getDiagonal(array2D){
  let rightDiagonal = 0;
  let leftDiagonal = 0;
  right: for(let i = 0; i < array2D.length; i++){
    rightDiagonal += array2D[i][i];
  }
  let j = 0;
  left: for(let i = (array2D.length - 1); i >= 0; i--){
    leftDiagonal += array2D[j][i];
    j++;
  }
  return {rightDiagonal: rightDiagonal, leftDiagonal: leftDiagonal}
}

function twoD(arr){  //parses arr into 2D array
  let n = Math.sqrt(arr.length);
  let array2D = [[]];
  let count = 0;
  let step = 0;
  for(let i = 0; i < arr.length; i++){
    if(step == n){
      count++;
      array2D[count] = [];
      array2D[count].push(arr[i]);
      step = 1;
      continue;
    }
    array2D[count].push(arr[i]);
    step++
  }
  return array2D
}