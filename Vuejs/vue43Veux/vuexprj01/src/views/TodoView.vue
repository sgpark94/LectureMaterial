<style scoped>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
  <div id="app">
    <!-- TodoHeader -->
    <TodoHeader />

    <!-- TodoInput -->
    <TodoInput @addTodo="addTodo" />

    <!-- TodoList -->
    <TodoList
      :todoItems="todoItems"
      @doneToggle="doneToggle"
      @removeTodo="removeTodo"
    />

    <!-- TodoFooter -->
    <!-- = 기준 오른쪽 부모거, 왼쪽 자식거 / 부모의 데이터에서 전체 삭제 후 자식에게 내려준다. props -->
    <TodoFooter @clearAll="clearAll" />
  </div>
</template>

<script>
import TodoHeader from '../components/todo/TodoHeader.vue';
import TodoInput from '../components/todo/TodoInput.vue';
import TodoList from '../components/todo/TodoList.vue';
import TodoFooter from '../components/todo/TodoFooter.vue';

// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    /* data 프로퍼티 값 변경시 this.set(object, key, value) 을 사용 */
    return {
      todoItems: [
        { id: 1, todo: '영화보기', done: false },
        { id: 2, todo: '주말 산책', done: true },
        { id: 3, todo: 'ES6 학습', done: false },
        { id: 4, todo: '잠실 야구장', done: false },
      ],
    };
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    /* vuex 를 사용하는 경우
      mapActions 는 store의 actions 를 가져옵니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 actions 를 가져오는 2가지 방식
      1) store.모듈명.actions 이름 바꾸어 사용하기(추천방식)
         ...mapActions('모듈명', { dispatch액션명1: '액션명1', dispatch액션명2: '액션명2' }),
      2) store.모듈명.actions 이름 그대로 사용하기
         ...mapActions('모듈명', ['액션명1', '액션명2']),
      */
    clearAll() {
      debugger;
      this.todoItems = [];
    },
    addTodo(newTodoItem) {
      debugger;

      // max id 구하기 -> map, reduce를 사용하여 newid 만들기
      // todoItems 추가할 객체 만들기
      // 배열에 추가
      const maxid = this.todoItems
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
      this.todoItems.push(newTodo);
    },
    doneToggle(id) {
      debugger;
      // 새로운 todo 만들어서 todoItems에 넣어준다.
      const newTodos = this.todoItems.map((item) => {
        // 새로운 배열 생성.
        if (item.id === id) item.done = !item.done;
        return item;
      });
      this.todoItems = newTodos;
    },
    removeTodo(id) {
      const newTodos = this.todoItems.filter((item, index, array) => {
        // filter -> true/false 반환, 삭제할 때 사용.
        debugger;
        if (item.id === id) return false;
        return true;
      });
      this.todoItems = newTodos;

      // 이벤트 취소
      window.event.stopPropagation(); // 인자가 없기 떄문에 window로 넣은것.
      // = window.event.preventDefault();
    },
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList,
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
    /* vuex 를 사용하는 경우
      mapGetters 는 store의 getters 를 가져옵니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 getters 를 가져오는 2가지 방식
      1) store.모듈명.getters 이름 바꾸어 사용하기
         ...mapGetters('모듈명', { get게터명1: '게터명1', get게터명2: '게터명2' }),
      2) store.모듈명.getters 이름 그대로 사용하기(추천방식)
         ...mapGetters('모듈명', ['게터명1', '게터명2']),
      */
  },
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
  updated() {
    console.log('updated');
  },
};
</script>
