<template>
  <div id="app">
    <h2>컴포넌트 등록</h2>
    <Vue3103Comp :localmsg="localmsg1" />
    <Vue3103Comp :localmsg="localmsg2" />
  </div>
</template>

<script>
import Vue3103Comp from '../components/Vue3103Comp.vue';

export default {
  /* pdtmc^2w */
  data() {
    // 내가 보관하는 것
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      localmsg1: '부모에서 파일 컴포넌트로 넘겨진 메시지 1',
      localmsg2: '부모에서 파일 컴포넌트로 넘겨진 메시지 2'
    };
  },
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    lclick() {}
  },
  components: {
    /* 전역 컴포넌트는 등록하지 않는다. */
    /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
    Vue3103Comp
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
