/*

    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.

*/

var string1 = '안녕하세요';
var string2 = '반갑습니다';
var greeting = `${string1} ${string2}`;

var product = { name: '도서', price: '4200원' };
var message = `
    제품 ${product.name}의 가격은 ${product.price}입니다.
`;
console.log(message);

var value1 = 1;
var value2 = 2;
var operator1 = `곱셈값은 ${value1 * value2}입니다.`;
var operator2 = `${value1 === value2 ? '참' : '거짓'}입니다.`;

var student = {
  name: 'John Kagga',
  city: 'Kampala'
};

// ES5
var message = 'Hello ' + student.name + ' from ' + student.city;
console.log(message);

// ES2015
message = `Hello ${student.name} from ${student.city}`;
console.log(message);
