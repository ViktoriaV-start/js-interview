// Дана строка s, найдите в ней первый неповторяющийся символ и верните его индекс. Если он не существует, верните -1.


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = (s) => {

  for (const char of s) {
    const idx = s.indexOf(char);
    if (idx === s.lastIndexOf(char)) return idx;
  }


  return -1;

}

console.log(firstUniqChar("loveleetcode"))
