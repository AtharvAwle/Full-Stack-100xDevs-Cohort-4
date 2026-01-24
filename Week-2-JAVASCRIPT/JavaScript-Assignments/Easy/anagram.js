function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
  function sortStr(str){
    return str.toLowerCase().split('').sort().join('')
  }

  return sortStr(str1) == sortStr(str2)
}