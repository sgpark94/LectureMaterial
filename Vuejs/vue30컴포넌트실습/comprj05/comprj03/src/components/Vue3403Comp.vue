<template>
  <!-- 자식 컴포넌트 -->
  <div>
    <button @click="showLog">show</button>
  </div>
</template>

<script>
export default {
  /* pdtmc^2w */
  props: [], // 부모로부터 값을 받겠다.
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    // 내가 보관하는 것
    return {};
  },
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
    showLog(e) {
      console.log(e.target);
      /* child-component 컴포넌트 에서 <button v-on:click="showLog">show</button> 을 클릭하면 show-log 라는 사용자 이벤트를 발생시키고 "abc" 와 123 을 값으로 전달하시오 */
      debugger;
      this.$emit('showLog', 'abc', 123);
    }
  },
  components: {
    /* 전역 컴포넌트는 등록하지 않는다. */
    /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
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
