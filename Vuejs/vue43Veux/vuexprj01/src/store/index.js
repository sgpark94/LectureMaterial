import { createStore } from 'vuex';

import counterStore from './modules/counterStore';
import todoStore from './modules/todoStore';

export default createStore({
  // actions: {},
  // mutations: {},
  // state: {},
  // getters: {},

  // 프로젝트가 커지면 actions ~ getters 까지를 쪼개서 사용한다.
  modules: {
    // 파일을 변수에 담는다.
    counterStore,
    todoStore,
  },
});
