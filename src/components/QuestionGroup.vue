<template>
  <div class='ui centered card question-group'>
    <div class='content'>
      <h1 class="group-title">{{ group.groupTitle }}</h1>
      <span>{{ group.selected }}</span>
      <question
              v-on:groupSelected="disableGroup"
              v-for="question in group.questions"
              :is-group-selected="group.selected"
              :group-socre="group.groupScore"
              :key="question.title"
              v-bind:question="question"></question>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Question from './Question'

  export default {
    props: ['group'],
    components: {
      Question
    },
    methods: {
      disableGroup: function (eventData) {
        this.group.selected = true
        this.group.groupScore = eventData.questionScore
        this.$emit('nextGroup')
      }
    }
  }
</script>
<style>
  .question-group {
    width: 100%;
    background: gray;
    float: left;
    padding: 50px;
    margin-bottom: 50px;
  }
</style>
