

const text = document.getElementById(
  "text"
);
const input = document.getElementById(
  "input"
) 

text.textContent = 'dddd';

if (!text || !input) {
  throw new Error("нет полей");
}

const data = {
  title: ""
};


input.addEventListener('keyup', (event) => {
  Object.defineProperty(data, 'title', {
    value: event.target.value,
    writable: true,
    configurable: true,
    enumerable: true
  });

text.textContent = data.title;

});


