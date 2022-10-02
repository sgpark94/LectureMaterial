// rfc

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

const StyledCompStyle = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  .App {
    display: inline-block;
    background-color: gray;
    border: 10px solid black;
    height: 63px;
    width: 228px;
  }
`;

// 동적으로 변하는 부분은 props로 데이터를 받는다.
// import styled, { css } from 'styled-components';
const StyledCircle = styled.div`
  /* https://styled-components.com/docs/basics#adapting-based-on-props */
  width: 5rem;
  height: 5rem;
  background: ${(props) => {
    return props.color || 'black';
  }};
  border-radius: 50%;

  ${(props) => {
    return (
      props.huge &&
      css`
        width: 10rem;
        height: 10rem;
      `
    );
  }}
`;

function CompStyle({ ...props }) {
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledCompStyle>
      <h2>styled-components 만든 </h2>
      <div className="App">styled-components 스타일로 만든</div>
      <hr />
      <StyledCircle />
      <hr />
      <StyledCircle color={'blue'} />
      <hr />
      <StyledCircle color={'aqua'} huge={false} />
      <hr />
      <StyledCircle color={'red'} huge={true} />
    </StyledCompStyle>
  );
}

CompStyle.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
CompStyle.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default React.memo(CompStyle); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
