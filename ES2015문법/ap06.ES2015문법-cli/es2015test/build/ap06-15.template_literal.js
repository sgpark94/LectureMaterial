"use strict";

/*
    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.
*/
var string1 = '안녕하세요.',
    string2 = '반갑습니다.',
    greeting = "".concat(string1, " ").concat(string2);
console.log(greeting);
var product = {
  name: '도서',
  price: '4200원'
};
var message = "\n    \uC81C\uD488 ".concat(product.name, "\uC758\n\n    \uAC00\uACA9\uC740 ").concat(product.price, "\uC785\uB2C8\uB2E4.\n");
console.log(message);
var value1 = 1,
    value2 = '10',
    operator1 = "\uACF1\uC148\uAC12\uC740 ".concat(value1 * value2, "\uC785\uB2C8\uB2E4."),
    operator2 = "".concat(value1 == value2 ? '참' : '거짓', "\uC785\uB2C8\uB2E4.");
console.log(operator1, operator2);
var color_lawn = {
  title: '잔디',
  color: '#00ff00',
  rating: 0
};

function rateColor(color, rating) {
  color.rating = rating;
  return color;
}

console.log(rateColor(color_lawn, 5).rating);