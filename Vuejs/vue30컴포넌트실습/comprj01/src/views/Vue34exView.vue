<style scoped></style>

<template>
  <!-- 부모 컴포넌트 -->
  <div id="app">
    자식 컴포넌트에서 받은 값: {{ mesg }}
    <!-- emit : 자식 comp -> 부모 comp로 데이터 전달. -->
    <Vue34exParent />
  </div>
</template>

<script>
import Vue34exParent from '../components/vue34ex/Vue34exParent.vue';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      mesg: null,
    };
  },
  //template: ``,
  methods: {
    /* 이벤트 핸들러 등록 + 일반 함수 */
  },
  components: {
    /* 전역 컴포넌트는 등록하지 않는다. */
    /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
    Vue34exParent,
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
  },
};
</script>
