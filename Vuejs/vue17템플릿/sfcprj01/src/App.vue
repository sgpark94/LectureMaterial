<template>
  <div>
    <div>템플릿 예제</div>
    {{ message }}
  </div>
</template>

<script>
export default {
  /* pdtmc^2w */
  /*
    컴포넌트 - data 는 methods로 만들어야 한다. data: {}
    인스턴스 - data 는 함수로 만든다. data() { return {}}
  */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {};
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
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

<style scoped>
</style>