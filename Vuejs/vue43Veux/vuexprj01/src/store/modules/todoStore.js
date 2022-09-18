// Vuex store 모듈 만들기
import axios from 'axios';

const store = {
  namespaced: true /* 모듈 store 여부 설정 */,
  actions: {
    /* 왜 actions를 사용하나? 비동기로 외부 함수 호출하기 위해서
     * actions 에는 메서드만 등록 가능하다.
     * 첫번째인자: 무조건 mutations로 고정.
     * 두번째인자: 값. store.dispatch()호출시 넘겨지는 값.
     */
    set(mutations /* 고정 */, payload) {
      mutations.commit('set', payload);
    },
    get(mutations /* 고정 */, payload) {
      mutations.commit('get', payload);
    },
    clearAll({ commit }) {
      // const { commit, getters,state }  = rest ;
      debugger;
      // console.log(commit, getters, state);
      commit('clearAll');
    },
    doneToggle({ commit }, id) {
      debugger;
      commit('doneToggle', id);
    },
    removeTodo({ commit }, id) {
      commit('removeTodo', id);
    },
    addTodo({ commit }, newTodoItem) {
      commit('addTodo', newTodoItem);
    },
    getTodo({ commit }) {
      commit('getTodo');
    },
  },
  mutations: {
    /* 왜 mutations 를 사용하나? state 를 바꾸기 위해서
     * mutations 에는 메서드만 등록 가능하다.
     * 첫번째인자: 무조건 state 로 고정.
     * 두번째인자: 값. mutations.commit() 호출시 넘겨지는 값.
     * */
    set(state /* 고정 */, param /* mutations.commit 호출시 넘겨지는 값 */) {
      state.인자 = param;
    },
    get(state /* 고정 */, param /* mutations.commit 호출시 넘겨지는 값 */) {
      state.인자 = param;
    },
    clearAll(state) {
      state.todoItems = [];
    },
    doneToggle(state, id) {
      debugger;
      // 새로운 todo 만들어서 todoItems에 넣어준다.
      const newTodos = state.todoItems.map((item) => {
        // 새로운 배열 생성.
        if (item.id === id) item.done = !item.done;
        return item;
      });
      store.todoItems = newTodos;
    },
    removeTodo(state, id) {
      const newTodos = state.todoItems.filter((item, index, array) => {
        // filter -> true/false 반환, 삭제할 때 사용.
        debugger;
        if (item.id === id) return false;
        return true;
      });
      state.todoItems = newTodos;

      // 이벤트 취소
      window.event.stopPropagation(); // 인자가 없기 떄문에 window로 넣은것.
      // = window.event.preventDefault();
    },
    addTodo(state, id) {
      // max id 구하기 -> map, reduce를 사용하여 newid 만들기
      // todoItems 추가할 객체 만들기
      // 배열에 추가
      const maxid = state.todoItems
        .map((item) => item.id)
        .reduce((pValue, cValue) => {
          if (pValue > cValue) return pValue;
          return cValue;
        });

      const newTodo = {
        id: maxid + 1,
        todo: newTodoItem,
        done: false,
      };
      state.todoItems.push(newTodo);
    },
    getTodo(state) {
      state.todoItems = [];
    },
  },
  state: {
    /* vue인스턴스나 컴포넌트의 data 프로퍼티에 해당 */
    todoItems: [
      { id: 1, todo: '영화보기 VUEX', done: false },
      { id: 2, todo: '주말 산책 VUEX', done: true },
      { id: 3, todo: 'ES6 학습 VUEX', done: false },
      { id: 4, todo: '잠실 야구장 VUEX', done: false },
    ],
  },
  getters: {
    /* state 변경 정보를 컴포넌트에 전달하는 역활.
     * 메서드로 만들어야 하며 메서드명은 state 의 이름을 그대로 사용
     * 첫번째인자: 무조건 state
     * 컴포넌트에서는 computed를 사용하여 store의 state 변경 정보를 자동으로 가져오게 된다.
     * 예시) message()=> store.getters.인자;
     */
    todoItems(state) {
      return state.todoItems;
    },
  },
};

export default store;
