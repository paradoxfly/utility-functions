/* 
  @description: this function takes an array of n numbers and returns a frequency array of those numbers. Each element must be less than 100
  @params: Array[int]
  @returns: array of frequencies of elements of the input array 
*/
function countingSort(arr) {
  let freqArray = [];
  for(let i = 0; i < 100; i++){
    freqArray.push(0);
  }
  for(let i of arr){
    freqArray[i] += 1;
  }
  return freqArray;
}

console.log(countingSort([1,2,3,3,3,3,3,4,4,5,5,6,6,8,99,99,99,99,99,99,99,99,99,99,99,99,99]));