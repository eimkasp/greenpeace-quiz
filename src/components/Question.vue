<template>
  <div class='single-question'
       v-on:click="selected()"
       v-bind:class="{ selectedItem: question.selected}">
    <img :src="question.image"/>
    <div class="question-title">
      {{ question.title }}
      {{ question.selected }}
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: ['question', 'isGroupSelected'],
    data: function () {
      return {
        counter: 0
      }
    },
    methods: {
      selected: function () {
        /* Check if this answer was already answered */
        if (this.isGroupSelected === true) {
          alert('this answer is already answered')
        } else {
          this.question.selected = !this.question.selected
          this.$emit('groupSelected')
        }
      }
    }
  }
</script>
<style>
  .single-question img {
    height: 150px;
    width: auto;
  }

  .single-question {
    width: 50%;
    float: left;
    margin-bottom: 20px;
    cursor: pointer;
    padding: 15px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .single-question:hover, .single-question.selectedItem {
    background: white;
  }

</style>
