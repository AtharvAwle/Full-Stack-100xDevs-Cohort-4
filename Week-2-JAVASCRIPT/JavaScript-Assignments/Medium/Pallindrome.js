function isPalindrome(str) {
  let s = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let n = s.length/2;
  let j = s.length-1;

  for(let i = 0 ; i < n ; i++){
    if(s[i] != s[j]){
      return false;
    }
    j--;
  }
  return true;

}