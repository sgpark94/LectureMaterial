/*
 (구조) 분해 할당에 대해서 알아본다.
*/

// 배열 분해할당
// ES5 에서 분해할당 하는 방법.
const points = [20, 30, 40];
const x1 = points[0],
  y1 = points[1],
  z1 = points[2];
console.log(x1, y1, z1); // 20, 30, 40

// ES6에서 분해할당 하는 방법
const [x2, y2, z2] = points;
console.log(x2, y2, z2); // 20, 30, 40

// 두번째 값 무시하기
const [x3, , z3] = points; // [20, 30, 40];
console.log(x3, z3); // 20 40

// 두, 세번째 값 무시하기
const [x4, , , w4] = points; // [20, 30, 40];
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

const car1 = {
  type: 't1',
  color: 'S1',
  type: 2017
};

const car2 = {
  type: 't2',
  color: 'S2',
  type: 2019
};

const { type } = car1; // car1에서 type 만 사용하겠다는 의미.
console.log(type);

const func = function ({ type }) {
  console.log(type);
};

func({ ...car1, ...car2 }); // car2의 값이 들어가서 car2.type -> 2019 가 값으로 들어간다.

const morning = {
  breakfast: '미역국',
  lunch: '삼치구이'
};

const dinner = '스테이크';

const meals = {
  ...morning,
  dinner
};
console.log(meals);
