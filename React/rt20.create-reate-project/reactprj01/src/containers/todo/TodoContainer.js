import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

const StyledTodoContainer = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
`;

function TodoContainer({ ...props }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      todo: '영화보기',
      done: false,
    },
    {
      id: 2,
      todo: '주말 산책',
      done: true,
    },
    {
      id: 3,
      todo: 'ES6 학습',
      done: false,
    },
    {
      id: 4,
      todo: '잠실 야구장',
      done: false,
    },
  ]);

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  const callback = useCallback(
    (param) => {
      // state 변경
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );
  const callbackClearAll = useCallback(
    // 상태값이 변경될 경우 메서드를 다시 만드는 걸 목적으로 한다.
    (param) => {
      // state 변경
      debugger;

      setTodoItems([]);
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );
  const callbackDoneToggle = useCallback(
    // 상태값이 변경될 경우 메서드를 다시 만드는 걸 목적으로 한다.
    (id) => {
      // state 변경
      debugger;

      const newTodos = todoItems.map((item) => {
        if (item.id === id) item.done = !item.done;
        return item;
      });

      setTodoItems(newTodos); // todoItems = newTodos;
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );
  const callbackRemoveTodo = useCallback(
    // 상태값이 변경될 경우 메서드를 다시 만드는 걸 목적으로 한다.
    (id) => {
      // state 변경
      debugger;

      // setTodoItems는 todoItems 상태를 바꾸기 위한 setter 메서드
      // 삭제 기능 추가
      const newTodos = todoItems.filter((item) => {
        if (item.id === id) return false; // 제외
        return true; // 포함
      });

      setTodoItems(newTodos); // todoItems = newTodos;
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );
  const callbackAddTodo = useCallback(
    // 상태값이 변경될 경우 메서드를 다시 만드는 걸 목적으로 한다.
    (value) => {
      // state 변경
      debugger;

      // setTodoItems는 todoItems 상태를 바꾸기 위한 setter 메서드
      // 삭제 기능 추가
      const maxid =
        todoItems &&
        todoItems
          .map((item) => {
            return item.id;
          })
          .reduce((pValue, cValue) => {
            return pValue > cValue ? pValue : cValue;
          }, 0); // 4

      const newTodo = {
        id: maxid + 1,
        todo: value,
        done: false,
      };

      // 배열에 추가. todoItems = [...todoItems, newTodo]
      setTodoItems([...todoItems, newTodo]); // todoItems = [...todoItems, newTodo]
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
      todoItems,
    ],
  );

  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoContainer>
      <div id="app">
        {/* <!-- TodoHeader --> */}
        <header>
          <TodoHeader />
        </header>

        {/* <!-- TodoInput --> */}
        <TodoInput callbackAddTodo={callbackAddTodo} />

        {/* <!-- TodoList --> */}
        <TodoList
          todoItems={todoItems}
          callbackDoneToggle={callbackDoneToggle}
          callbackRemoveTodo={callbackRemoveTodo}
        />

        {/* <!-- TodoFooter --> */}
        <TodoFooter callbackClearAll={callbackClearAll} />
      </div>
    </StyledTodoContainer>
  );
}

TodoContainer.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
TodoContainer.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default React.memo(TodoContainer); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
