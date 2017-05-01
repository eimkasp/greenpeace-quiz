<template>
  <div id="loading-bar"
       v-bind:style="{ width: questionIndex/totalQuestions * 100 + '%' }"
  >
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['totalQuestions', 'questionIndex'],
    data: function () {
      return {
        counter: 0
      }
    }
  }
</script>
<style>
  #loading-bar {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: green;
    transition: width 1s ease-out;
    z-index: -1;
  }
</style>
