"use strict";

/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.

*/
var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = "".concat(string1, " ").concat(string2);
var product = {
  name: '도서',
  price: '4200원'
};
var message = "\n    \uC81C\uD488 ".concat(product.name, "\uC758 \uAC00\uACA9\uC740 ").concat(product.price, "\uC785\uB2C8\uB2E4.\n");
console.log(message);
var value1 = 1;
var value2 = 2;
var operator1 = "\uACF1\uC148\uAC12\uC740 ".concat(value1 * value2, "\uC785\uB2C8\uB2E4.");
var operator2 = "".concat(value1 === value2 ? '참' : '거짓', "\uC785\uB2C8\uB2E4.");
var student = {
  name: 'John Kagga',
  city: 'Kampala'
}; // ES5

var message = 'Hello ' + student.name + ' from ' + student.city;
console.log(message); // ES2015

message = "Hello ".concat(student.name, " from ").concat(student.city);
console.log(message);