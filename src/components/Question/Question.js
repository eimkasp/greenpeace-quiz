export default {
  props: ['question', 'isGroupSelected'],
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    selected: function (question) {
      /* Check if this answer was already answered */
      if (this.isGroupSelected === true) {
        this.$emit('deselectGroup', question)
        this.question.selected = !this.question.selected
      } else {
        this.groupScore = this.question.questionScore
        this.question.selected = !this.question.selected
        this.$emit('groupSelected', question)
      }
    }
  }
}
