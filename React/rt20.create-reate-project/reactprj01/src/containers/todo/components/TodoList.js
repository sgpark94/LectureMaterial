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
`;

function TodoList({ ...props }) {
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoList>
      <section>
        <ul>
          <li>
            <i aria-hidden="true" className="checkBtn fas fa-check"></i>
            영화보기
            <span type="button" className="removeBtn">
              <i aria-hidden="true" className="far fa-trash-alt"></i>
            </span>
          </li>
          <li className="checked">
            <i aria-hidden="true" className="checkBtn fas fa-check"></i>
            주말 산책
            <span type="button" className="removeBtn">
              <i aria-hidden="true" className="far fa-trash-alt"></i>
            </span>
          </li>
          <li>
            <i aria-hidden="true" className="checkBtn fas fa-check"></i>
            ES6 학습
            <span type="button" className="removeBtn">
              <i aria-hidden="true" className="far fa-trash-alt"></i>
            </span>
          </li>
          <li>
            <i aria-hidden="true" className="checkBtn fas fa-check"></i>
            잠실 야구장
            <span type="button" className="removeBtn">
              <i aria-hidden="true" className="far fa-trash-alt"></i>
            </span>
          </li>
        </ul>
      </section>
    </StyledTodoList>
  );
}

TodoList.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
TodoList.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default React.memo(TodoList); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
