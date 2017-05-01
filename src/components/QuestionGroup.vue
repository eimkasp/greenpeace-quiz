<template>
  <div class='ui centered card question-group'>
    <div class='content'>
      <h1 class="group-title">{{ group.groupTitle }} ( <span>{{ group.selected }}</span>)</h1>

      <question
              v-on:groupSelected="disableGroup"
              v-on:deselectGroup="deselectAnswer"
              v-for="question in group.questions"
              :is-group-selected="group.selected"
              :group-socre="group.groupScore"
              :key="question.title"
              v-bind:question="question"></question>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Question from './Question/Question.vue'
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
      },
      deselectAnswer: function (eventData) {
        for (var i = 0; i < this.group.length; i++) {
          console.log(this.group[i])
          this.group[i].selected = false
        }
        this.$emit('nextGroup')
      }
    }
  }
</script>
<style>
  .question-group {
    width: 100%;
    margin-top: 50px;
    background: #bdc3c7;
    color: white;
    float: left;
    padding: 30px;
    box-sizing: border-box;
    margin-bottom: 50px;
  }
</style>
