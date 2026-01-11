'use strict';

// Просто скопируй и используй в начале файла
const clr = {
    r: (t) => `\x1b[31m${t}\x1b[0m`, // red
    g: (t) => `\x1b[32m${t}\x1b[0m`, // green
    y: (t) => `\x1b[33m${t}\x1b[0m`, // yellow    
    b: (t) => `\x1b[34m${t}\x1b[0m`, // blue
    m: (t) => `\x1b[35m${t}\x1b[0m`, // magenta
    c: (t) => `\x1b[36m${t}\x1b[0m`, // cyan
};

// Использование:
console.log(clr.r('Ошибка!'));
console.log(clr.g('Успех!'));
console.log(clr.y('Предупреждение'));
console.log(clr.b('Информация'));