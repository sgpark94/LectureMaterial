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

  button {
    border-style: groove;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }

  input:focus {
    outline: none;
  }

  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478fb, #8763fb);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addBtn {
    color: white;
    vertical-align: middle;
  }

  .closeModalBtn {
    color: #62acde;
  }

  .modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }

  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    font-family: Helvetica, Arial, sans-serif;
  }

  .modal-header h3 {
    margin-top: 0;
    color: #62acde;
  }

  .modal-body {
    margin: 20px 0;
  }

  .modal-default-button {
    float: right;
  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
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
        <TodoInput />

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
