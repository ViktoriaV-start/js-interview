'use strict';

const user = fetch('https://api.github.com/users/ViktoriaV-start');

user.then(res => {
  if (!res.ok) {
    throw new Error('Ошибка');
  }

  return res.json();
})
.then (data => {
  console.log(data);
})
.catch (err => {
  console.log(err);
})