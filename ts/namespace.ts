type NestedObject = {
    [key: string]: NestedObject | string;
}

// const namespace =  (value: string): NestedObject => {
//   const arr = value.split('.');
//   const length = arr.length;

//   let result = {};

//   for (let i = length-1; i >= 0; i--) {
//     result = {
//       [arr[i]]: { ...result }
//     }
//   }

//   return result;
// }

const namespace = (value: string): NestedObject => {
  const arr = value.split('.');
  const result = arr.reduceRight((acc, elem) => {
    return { [elem]: { ...acc }}
  }, {})

  return result;
}

console.log(namespace('a.b.c.d.e'));
