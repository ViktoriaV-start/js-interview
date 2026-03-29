const iterator = {
  current: 1,
  last: 5,
  next() {
    if (this.current <= this.last) {
      return ({
        value: this.current++,
        done: false
      })
    }

    return {
      value: undefined,
      done: true}
  }
}

console.log(iterator.next()) // { value: 1, done: false }
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next()) // { value: undefined, done: true }


const trueIterator = {
  //   from: 1,
  // to: 3,
  // [Symbol.iterator]() {
  //   let current = this.from;
  //   const last = this.to;
  //   return {
  //     next() {
  //       return current <= last
  //         ? { value: current++, done: false }
  //         : { done: true };
  //     }
  //   };
  // }

  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;

    return {
      next() {
      if (current <= last) {
        return {
          value: current++,
          done: false
        };
      }
      return {
          value: undefined,
          done: true
        };
    }}
  }
}

for (const value of trueIterator) {
  console.log(value);
}
