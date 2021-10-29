/* 
  @description: a function that takes a string of characters and steps each alphabet up a specified number of times thus encoding it
  @params: (s) String of characters
  @params: (k) Integer representing number of steps
  @returns: String of encoded characters
*/
function caesarCipher(s, k) {
  let stringArray = s.split('');
  let finalString = '';
  for(let char of stringArray){
    finalString += stepAlphabet(char, k)
  }
  return finalString;
}

/* 
  @description: steps an alphabet up by a specified number
  @params: Alphabet
  @params: Int Number of steps
*/
function stepAlphabet(alpha, n){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  alpha = alpha.charAt(0);
  if((alphabet.indexOf(alpha) == -1) && (ALPHABET.indexOf(alpha) == -1)) return alpha;

  if((alphabet.indexOf(alpha) != -1)){
    let index = alphabet.indexOf(alpha)
    index = index + n;
    while(true){
      if(index < 26){
        break;
      }
      if(index > 25){
        index = index - 26;
      }
    }
    return alphabet.charAt(index)
  }
  else{
    let index = ALPHABET.indexOf(alpha)
    index = index + n;
    while(true){
      if(index < 26){
        break;
      }
      if(index > 25){
        index = index - 26;
      }
    }
    return ALPHABET.charAt(index)
  }
}
