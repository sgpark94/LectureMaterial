<style scoped></style>

<template>
  <div id="app">
    <h1>{{ header }}</h1>
    <h2>{{ welcome }}</h2>
    <h3>{{ counter }}</h3>
    <div><input type="checkbox" v-model="callapi" />외부 api 호출</div>
    <button @click="handlerDecrement">빼줘</button>
    <button @click="handlerIncrement">더해줘</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      header: 'Vuex 사용 앱',
      // welcome: 'HELLO WORLD !',
      // counter: 0,
      callapi: false,
    };
  },
  //template: ``,
  methods: {
    ...mapActions('counterStore', {
      dispatchSet: 'set',
      dispatchGet: 'get',
    }),
    /* 이벤트 핸들러 등록 + 일반 함수 */
    handlerIncrement(e) {
      console.log(e.target);
      // this.counter = this.counter + 1;/
      this.dispatchSet(+1); // counterStore.actions.set() 실행됨.
    },
    handlerDecrement(e) {
      console.log(e.target);
      this.dispatchSet(-1);
    },
  },
  components: {
    /* 전역 컴포넌트는 등록하지 않는다. */
    /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
    ...mapGetters('counterStore', ['welcome', 'counter']),
  },
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('updated');
  },
};
</script>
