function palindromeIndex(s) {
  let temp = s;
  s = s.slice('')
  if(isPalindrome(temp)){
    return -1
  } else{
    let q = ''
    for(let i = 0; i < s.length; i++){
      q = removeChar(s, i)
      if(isPalindrome(q)){
        return i
      }
    }
    return -1
  }

}

function isPalindrome(x){
  let s = x.split('')
  if(s.length % 2 == 0) return false
  else{
    let mid = ((s.length + 1)/2) - 1;
    let count = s.length - 1;
    let check = 0;
    for(let x of s){
      if(count == mid){
        break
      }
      if(x == s[count]){
        check++
      }
      count --;
    }
    if(check == (s.length - 1)/2){
      return true
    } else{
      return false
    }
  }
}
function removeChar(s, n){
  let string = ''
  s = s.split('')
  for(let i = 0; i < s.length; i++){
    i == n ? null : string += s[i];
  }
  return string
}

// console.log(isPalindrome('aaaasaaasa'))
console.log(palindromeIndex('aaxbaa'))