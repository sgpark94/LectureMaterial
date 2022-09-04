<template>
  <!-- 부모 컴포넌트 -->
  <div id="app">
    자식 컴포넌트에서 받은 값: {{ mesg }}
    <child-component @showLog="printText"></child-component>
  </div>
</template>

<script>
import Vue3403Comp from '../components/Vue3403Comp.vue';
export default {
  /* pdtmc^2w */
  data() {
    // 내가 보관하는 것
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      mesg: '부모에서 설정한 값'
    };
  },
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    printText(param1, param2) {
      console.log(param1, param2); // 함수의 인자로 전달받은 것을 한번에 확인 가능.
      // 자식이 보낸 모든 이벤트 핸들러를 인자로 받을 수 있다.
      debugger;
      this.mesg = `자식에서 받은 값: ${param1}, ${param2}`;
    }
  },
  components: {
    /* 전역 컴포넌트는 등록하지 않는다. */
    /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
    'child-component': Vue3403Comp
  },
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */
  },
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('updated');
  }
};
</script>

<style scoped>
.aaa {
  display: inline-block;
}
</style>
