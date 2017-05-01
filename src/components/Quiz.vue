<template>
  <div>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <question-group v-for="group in questionGroups" v-bind:todo="group"></question-group>

  </div>
</template>

<script type="text/javascript">
  import QuestionGroup from './QuestionGroup'

  export default {
    props: ['questionGroups'],
    components: {
      QuestionGroup
    }
  }
</script>
<style>
</style>
