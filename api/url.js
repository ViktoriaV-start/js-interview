'use strict';

const clr = {
    r: (t) => `\x1b[31m${t}\x1b[0m`, // red
    g: (t) => `\x1b[32m${t}\x1b[0m`, // green
    y: (t) => `\x1b[33m${t}\x1b[0m`, // yellow    
    b: (t) => `\x1b[34m${t}\x1b[0m`, // blue
    m: (t) => `\x1b[35m${t}\x1b[0m`, // magenta
    c: (t) => `\x1b[36m${t}\x1b[0m`, // cyan
};

const myUrl = new URL('https://some.site.ru:5680/catalog/?name=Alex'); // лучше в блоке try ... catch

console.log(myUrl.href);
console.log(myUrl.host);
console.log(myUrl.hostname);
console.log(myUrl.protocol);
console.log(myUrl.port);
console.log(myUrl.origin); // не доступно для изменений
console.log(myUrl.pathname);
console.log(myUrl.search);
console.log(myUrl.searchParams); // менять можно только через методы
console.log(myUrl.hash);


// Методы экземпляра
console.log(myUrl.toJSON()); // аналог toString
console.log(myUrl.toString()); // аналог href

// Статические методы:
console.log(URL.canParse('https://some.site.ru:5680/catalog/?name=Alex')); // с этой проверкой не требуется проверка в блоке try ... catch

// URL.createObjectURL(...) // Для работы с двоичными данными, адрес данных в памяти браузера
// URL.revokeObjectURL(...)

console.log(URL.parse('https://some.site.ru:5680/catalog/?name=Alex')); // аналог new URL - вернет объект


// URLSearchParams - отдельное API, предоставляет методы,
// с помощью которых можно манипулировать данными в myUrl.searchParams;
// С отдельным экземпляра также можно работать, но он не будет влиять на исходный урл, нужно будет
// его переводить в строку и присваивать в myUrl.search = (new URLSearchParams({ id: 123 })).toString();

const params = new URLSearchParams({ id: 123, name: "Lu" });
myUrl.search = (params).toString();
console.log(clr.m('Переопределенные параметры'), myUrl.href);

console.log(clr.b('Size'), params.size); // Size 2


// size 
//  append()
//  delete()
// entries()
// forEach()
// get()
// getAll()
// has()
// keys()
// set()
// sort()
// toString()
// values()
