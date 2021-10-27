flippingMatrix([[1,2,3],[4,5,6],[7,8,9]])

/*
  @description: this function takes a 2D matrix and flips its rows and columns until the sum of the elements of its upper left submatrix is max
  @params: two dimensional array representing a matrix
  @returns: maximum sum of elements of top left sub matrix
*/
function flippingMatrix(matrix) {
  
  // 1,2,3
  // 4,5,6
  // 7,8,9
}


/* 
  @description: flips a row of a matrix
  @params: two-dimensional array
  @returns: modified two-dimensional array
*/
function flipRow(matrix, i){
  let holder = [];
  for(let j = 0; j < matrix[i].length; j++){
    holder.push(matrix[i][j])
  }
  delete matrix[i];
  matrix[i] = []
  let count = holder.length - 1;
  for(let j = 0; j < holder.length; j++){
    matrix[i].push(holder[count])
    count--
  }
  return matrix
}

/* 
  @description: flips a column of a matrix
  @params: two-dimensional array
  @returns: modified two-dimensional array
*/
function flipColumn(matrix, i){
  let holder = [];
  for(let j = 0; j < matrix.length; j++){
    holder.push(matrix[j][i])
    delete matrix[j][i]
  }
  console.log(holder)
  let count = holder.length - 1;
  for(let j of matrix){
    j[i] = holder[count]
    count--
  }
  return matrix
}