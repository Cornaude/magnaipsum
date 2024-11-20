class Operator {
  constructor(arg1, arg2) {
    console.log('Constructor called with arguments:', arg1, arg2);
  }
}

const init = 'initial value';
const op = new Operator(null, init);
