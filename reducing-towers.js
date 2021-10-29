/* 
  @description: a game where two players try to reduce n towers of m height to 1 by taking turns removing sections from
  each tower. The tower must be reduced to a height which evenlly divides its initial height.
  @params: (n); Integer representing number of towers
  @params: (m); Integer representing height of towers
  @returns: integers 1 or 2 depending on which player wins. The player out of moves to play in his turn loses
*/
function towerBreakers(n, m) {
  let towers = [];
  let player = 2;
  for(let i = 0; i < n; i++){
    towers.push(m);
  }
  while(true){
    let next = nextmove(towers);
    if(next == -1){
      return player
    } else{
      reduceTower(towers, next)
      player == 1 ? player = 2 : player = 1;
    }
  }
}

/* 
  @description: checks if all elements of an array are equal to each other
  @param: array
  @returns: Boolean
*/
function areEqual(array){
  let check = 1;
  let temp = undefined;
  for(let i of array){
    if(temp == undefined){
      temp = i;
      continue;
    } 
    else if(i == temp){
      check++
    }
    temp = i;
  }
  if(array.length == check){
    return true;
  }
  else{
    return false;
  }
}

/* 
  @description: Checks if all elements in an array are equal to 1
  @params:Array
  @returns: Boolean
*/
function areOne(array){
  let count = 0;
  for(let i of array){
    if(i == 1){
      count++
    }
  }
  if(count == array.length){
    return true;
  } else{
    return false;
  }
}

/* 
  @description: Checks for next possible move and returns index of available move or (-1) if none
  @param: Array
  @returns: Integer
*/
function nextmove(array){
  if(areOne(array)){
    return -1;
  }
  else if(areEqual(array)){
    return 0
  } 
  else{
    let max = Math.max(...array)
    return array.indexOf(max)
  }
}

/* 
  @description: Takes a value and reduces it to a number that divides it evenly
  @params: Integer
  @returns: Integer
*/
function reduceTower(array, index){
  if(isPrime(array[index])){
      array[index] = 1;
  } 
  else{
    if(isLastMove(array)){
      array[index] = 1;
    }
    else{
      if(array[index] % 2 == 0){
        array[index] = array[index] / 2;
      }
      else{
        let start = (array[index] + 1) / 2;
        for(let i = start; i > 1; i--){
          if(array[index] % i == 0){
            array[index] = i;
            break;
          }
        }
      }
    }
  }

}

/*
  @description: Checks if a number is a prime number
  @params: Int
  @returns: Boolean  
*/
function isPrime(m){
  if(m % 2 == 0){
    return false;
  }
  else{
    let check = 2;
    let start = (m + 1) / 2;
    for(let i = start; i > 1; i--){
      if(m % i == 0) return false
      if(m % check == 0) return false
      if(check > i) return true
      if(check == start) continue
      check++
    }
    return true
  }
}

/* 
  @description: Checks if all other elements of array are = 1 except one element
  @params: Array
  @returns: Boolean
*/
function isLastMove(array){
  let count = 0;
  for(let i of array){
    if(i == 1){
      count++
    }
  }
  if(count == array.length - 1){
    return true;
  } else{
    return false;
  }
}

