"use strict";

var _console;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*

    스프레드 사용법을 학습한다.

    ES 5에서는
    arguments 매개변수는 유사 배열 객체다.
        length 프로퍼티가 있다.
        Array  메서드를 사용할 수 없다.
        arrow function에서는 arguments는 사용할 수 없다.

    ES2015 에서는
    rest 매개변수는 배열이다.
        rest 연산자(...)를 사용하여 함수의 매개변수를 작성한 형태다.
        함수의 매개변수로 넘어오는 값들을 "배열"로 만든다.

    Spread 연산자는 ... 이다.
        이터러블(iterable) 객체를 "개별" 요소로 분리
        이터러블(iterable) 객체에는 Object, Array, String, Map, Set 등이 있다.
        iterator를 생성해서 next()로 순회할 수 있는 자료구조가 이터러블

*/
// 배열을 개별 변수로 만든.
var cities = ['서울', '부산', '제주'];
var x = cities[0]; // '서울'

var y = cities[1]; // '부산'

var z = cities[2]; // '제주

console.log(cities[0], cities[1], cities[2]); // '서울', '부산', '제주'

(_console = console).log.apply(_console, cities); // '서울', '부산', '제주'
// spread 연산자는 기존의 값을 이용하여 새로운 값을 만들때 사용된다.
// 복제된 배열, 복제된 객체


var east = ['U', 'K', 'T'];
var west = ['N', 'C', 'G']; // const countries = ['U', 'K', 'T', 'N', 'C', 'G'];

console.log(east.concat(west)); // ["U", "K", "T", "N", "C", "G"]

var countries = [].concat(east, west); // ... : spread 연산자

console.log(countries);

function childComponent() {
  for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
    props[_key] = arguments[_key];
  }

  // 2. 분해한 개별요소들을 하나의 배열로 뭉친다.
  console.log(props);
}

var message = 'passed from Parent Component';
childComponent.apply(void 0, _toConsumableArray(message)); // 1. 개별 요소들로 분해해서 넣고