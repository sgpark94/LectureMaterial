debugger;
var arr = [];
arr[0] = 1;
arr[1] = 2;
console.log(arr);
console.log(arr[0]);

var arr = [];
arr['0'] = 1;
arr['1'] = 2;
console.log(arr);
console.log(arr['0']);

var arr = {};
arr['0'] = 1;
arr['1'] = 2;
console.log(arr);
console.log(arr['0']);

// javscript에서는 배열은 없고 다 객체이다.

for (const (val, i) in arr) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];

  }
}
