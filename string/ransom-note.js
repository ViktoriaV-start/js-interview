// Есть строка-сдача и есть magazine-касса.
// Нужно определить, хватает ли в magazine-кассе элементов, чтобы сформировать заданную строку-сдачу

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// const canConstruct = function(ransomNote, magazine) {
//   if(ransomNote.length > magazine.length){
//         return false
//     }
    
//   let ransom = ransomNote.split('');
//   let mag = magazine.split('');

//   const length = ransom.length;


//   for (let i = 0; i < length; i++) {
//     const idx = mag.indexOf(ransom[i]);
    
//     if (idx < 0) {
//       return false;
//     }

//     mag.splice(idx, 1);

//   }

//     return true;
// };


// O(N)

const canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  // Посчитаем имеющиеся в наличии монетки-символы и количество каждого
  const mag = new Map(); 

  for (const elem of magazine) {
    if (!mag.has(elem)) {
      mag.set(elem, 1); // Если в маппере еще нет такого символа - установим и укажем ему значение = 1, потому что это первый
    } else {
      mag.set(elem, mag.get(elem) + 1) // Если такой символ уже встречался и уже был добавлен в маппер - увеличим его значение (то есть количество) на 1
    }

    // mag.set(elem, (mag.get(elem) || 0) + 1); // сокращенный вариант
  }

  for (const elem of ransomNote) {
    if (!mag.has(elem)) return false;

    if (mag.get(elem) <= 0) return false;

    mag.set(elem, mag.get(elem) - 1)

  }

  return true;
}

const ransom = 'aa';
const magazine = 'aab'

console.log(canConstruct(ransom, magazine));
