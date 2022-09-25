"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 (구조) 분해 할당에 대해서 알아본다.
*/
// 배열 분해할당
// ES5 에서 분해할당 하는 방법.
var points = [20, 30, 40];
var x1 = points[0],
    y1 = points[1],
    z1 = points[2];
console.log(x1, y1, z1); // 20, 30, 40
// ES6에서 분해할당 하는 방법

var x2 = points[0],
    y2 = points[1],
    z2 = points[2];
console.log(x2, y2, z2); // 20, 30, 40
// 두번째 값 무시하기

var x3 = points[0],
    z3 = points[2]; // [20, 30, 40];

console.log(x3, z3); // 20 40
// 두, 세번째 값 무시하기

var x4 = points[0],
    w4 = points[3]; // [20, 30, 40];

console.log(x4, w4); // 20 undefined(변수는 만들어졌으나 대입한 값이 없으므로 undefined 도출.)
// -> React useState 훅에서 이 패턴이 사용된다. (배열 분해할당)
// 객체 분해할당
// const car = {
//   type: 'SUV',
//   color: 'Yellow',
//   model: 2021
// };
// ES5 에서의 객체 분해할당
// const type1 = car.type;
// const color1 = car.color;
// const model1 = car.model;
// console.log(type1, color1, model1);
// ES6 에서의 객체 분해할당
// const { type, color, model, gear } = car; // React에서 주로 사용되는 방식
// console.log(type, color, model, gear);
// const { type: type2, color: color2, model: model2, gear: gear2 } = car;
// console.log(type2, color2, model2, gear2);
// const func1 = ({ type, color }) => {
//   // car의 객체 중 type 과 color 만 받겠다.
//   console.log(type, color);
// };
// func1(car);
//
// const func2 = function (car) {
//   const { type, color } = car;
//   console.log(type);
//   console.log(color);
// };
// func2(car);
//
// let abc = [1, 2, 3, 4];
// console.log(...abc);

var car1 = _defineProperty({
  type: 't1',
  color: 'S1'
}, "type", 2017);

var car2 = _defineProperty({
  type: 't2',
  color: 'S2'
}, "type", 2019);

var type = car1.type; // car1에서 type 만 사용하겠다는 의미.

console.log(type);

var func = function func(_ref) {
  var type = _ref.type;
  console.log(type);
};

func(_objectSpread(_objectSpread({}, car1), car2)); // car2의 값이 들어가서 car2.type -> 2019 가 값으로 들어간다.

var morning = {
  breakfast: '미역국',
  lunch: '삼치구이'
};
var dinner = '스테이크';

var meals = _objectSpread(_objectSpread({}, morning), {}, {
  dinner: dinner
});

console.log(meals);