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

const StyledTodoList = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  li.checked {
    background: #bbb;
    color: #fff;
    text-decoration: line-through;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }

  .list-enter,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
`;

function TodoList({ todoItems, callbackDoneToggle, callbackRemoveTodo }) {
  const handlerDoneToggle = (e) => {
    console.log(e.target);
    debugger;
    const id = Number(e.target.dataset.id); // data-id
    const item = JSON.parse(e.target.dataset.item); // data-item

    e.stopPropagation(); // click 이벤트 취소. 버블링 막기

    callbackDoneToggle(id); // 부모로부터 받는 메서드임.
  };

  const handlerRemoveTodo = (id) => {
    //  handlerRemoveTodo(item.id)에서 id 를 넘기니까 id를 인자로 받아야 한다.
    callbackRemoveTodo(id);
  };

  const lis = todoItems.map((item) => {
    const checked = item.done ? 'checked' : null;
    return (
      <li
        key={item.id}
        className={checked}
        data-id={item.id}
        data-item={JSON.stringify(item)}
        onClick={handlerDoneToggle}
      >
        <i aria-hidden="true" className="checkBtn fas fa-check"></i>
        {item.todo}
        <span
          type="button"
          className="removeBtn"
          onClick={(e) => {
            e.stopPropagation(); // 이벤트 취소. 버블링 방지
            handlerRemoveTodo(item.id);
          }}
        >
          <i aria-hidden="true" className="far fa-trash-alt"></i>
        </span>
      </li>
    );
  });

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoList>
      <section>
        <ul>{lis}</ul>
      </section>
    </StyledTodoList>
  );
}

TodoList.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  callbackDoneToggle: PropTypes.func.isRequired,
  callbackRemoveTodo: PropTypes.func.isRequired,
  todoItems: PropTypes.arrayOf(PropTypes.object),
};
TodoList.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  callbackDoneToggle: () => {}, // 부모로부터 받는 것 object
  callbackRemoveTodo: () => {}, // 부모로부터 받는 것 object
  todoItems: [],
};

export default React.memo(TodoList); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
