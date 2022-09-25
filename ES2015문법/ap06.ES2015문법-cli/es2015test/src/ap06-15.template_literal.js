/*
    ES2015의 template literal( 백틱, ``) 에 대해서 알아본다.
*/

const string1 = '안녕하세요.',
  string2 = '반갑습니다.',
  greeting = `${string1} ${string2}`;
console.log(greeting);

const product = { name: '도서', price: '4200원' };
const message = `
    제품 ${product.name}의

    가격은 ${product.price}입니다.
`;
console.log(message);

const value1 = 1,
  value2 = '10',
  operator1 = `곱셈값은 ${value1 * value2}입니다.`,
  operator2 = `${value1 == value2 ? '참' : '거짓'}입니다.`;

console.log(operator1, operator2);

let color_lawn = {
  title: '잔디',
  color: '#00ff00',
  rating: 0
};

function rateColor(color, rating) {
  color.rating = rating;
  return color;
}

console.log(rateColor(color_lawn, 5).rating);
