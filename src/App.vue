<template>
  <div id="app">
    <div class="container">
      <div class="answer">
        <div>
          Total Score: {{ totalScore }}
        </div>
        <div>
          Step: {{ questionIndex+1 }} out of {{ questionGroups.length }}
        </div>
        <loading-bar
                v-bind:totalQuestions="questionGroups.length"
                v-bind:questionIndex="questionIndex"></loading-bar>
      </div>

      <transition-group name="fade">
        <question-group
                v-on:nextGroup="nextGroup"
                v-show="index === questionIndex || !animationEnabled"
                v-for="(group, index) in questionGroups"
                :key="group.id"
                v-bind:group="group"></question-group>
      </transition-group>

      <div class="controll-buttons" v-show="questionIndex == questionGroups.length">
        <div class="button"
             v-on:click="countScore()">I'm done
        </div>

        <div class="button"
             v-on:click="restartQuiz()">
          Start again
        </div>
      </div>

    </div>


  </div>
</template>

<script>
  function initialState () {
    return {
      totalScore: 0,
      questionIndex: 0,
      animationEnabled: true, // Parameter to enable or disable animation
      questionGroups: [
        {
          groupTitle: 'Group1',
          selected: false,
          groupScore: 0,
          id: 1,
          questions: [{
            title: 'Question 1',
            image: 'https://cdn.pixabay.com/photo/2017/04/24/00/16/auto-2255161_1280.jpg',
            done: false,
            selected: false,
            questionScore: 5
          }, {
            title: 'Question 2',
            image: 'https://cdn.pixabay.com/photo/2017/04/08/10/23/surfer-2212948_1280.jpg',
            done: true,
            selected: false,
            questionScore: 3
          }, {
            title: 'Question 3',
            image: 'https://cdn.pixabay.com/photo/2017/04/24/13/28/photographer-2256456_1280.jpg',
            done: false,
            selected: false,
            questionScore: 2
          }, {
            title: 'Question 4',
            image: 'https://wallpaperbrowse.com/media/images/stunning-images-of-the-space.jpg',
            done: false,
            selected: false,
            questionScore: 1
          }]
        },
        {
          groupTitle: 'Group2',
          selected: false,
          groupScore: 0,
          id: 1,
          questions: [{
            title: 'Question 3',
            image: 'https://cdn.pixabay.com/photo/2017/04/24/00/16/auto-2255161_1280.jpg',
            done: false,
            selected: false,
            questionScore: 5
          }, {
            title: 'Question 5',
            image: 'https://cdn.pixabay.com/photo/2017/04/08/10/23/surfer-2212948_1280.jpg',
            done: true,
            selected: false,
            questionScore: 3
          }, {
            title: 'Question 11',
            image: 'https://wallpaperbrowse.com/media/images/stunning-images-of-the-space.jpg',
            done: false,
            selected: false,
            questionScore: 2
          }, {
            title: 'Question 55',
            image: 'https://wallpaperbrowse.com/media/images/stunning-images-of-the-space.jpg',
            done: false,
            selected: false,
            questionScore: 1
          }]
        },
        {
          groupTitle: 'Group3',
          selected: false,
          groupScore: 0,
          id: 1,
          questions: [{
            title: 'Question 3',
            image: 'https://cdn.pixabay.com/photo/2017/04/24/00/16/auto-2255161_1280.jpg',
            done: false,
            selected: false,
            questionScore: 3
          }, {
            title: 'Question 5',
            image: 'https://cdn.pixabay.com/photo/2017/04/08/10/23/surfer-2212948_1280.jpg',
            done: true,
            selected: false,
            questionScore: 2
          }, {
            title: 'Question 11',
            image: 'https://wallpaperbrowse.com/media/images/stunning-images-of-the-space.jpg',
            done: false,
            selected: false,
            questionScore: 2
          }, {
            title: 'Question 55',
            image: 'https://wallpaperbrowse.com/media/images/stunning-images-of-the-space.jpg',
            done: false,
            selected: false,
            questionScore: 6
          }]
        }
      ]
    }
  }

  import QuestionGroup from './components/QuestionGroup'
  import LoadingBar from './components/LoadingBar'

  export default {
    name: 'app',
    components: {
      QuestionGroup,
      LoadingBar
    },
    data () {
      return initialState()
    },
    methods: {
      countScore: function () {
        let total = 0
        this.questionGroups.filter(function (val) {
          console.log(val.groupScore)
          if (val.groupScore) {
            total += val.groupScore
          }
        })
        console.log(total)
        this.totalScore = total
      },
      nextGroup: function () {
        this.questionIndex++
        if (this.questionIndex === this.questionGroups.length) {
          this.countScore()
        }
      },
      restartQuiz: function () {
        this.questionIndex = 0
      //  this.data = initialState()
      }
    }

  }
</script>

<style>
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .container {
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
    position: relative;
  }

  .answer {
    position: fixed;
    width: 100%;
    background: #7f8c8d;
    color: white;
    padding: 10px 0;
    box-sizing: border-box;
    left: 0;
    top: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease-out;
  }

  .fade-enter-active {
    position: absolute;
    left: 0;
    top: 0;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transition: opacity 1s ease-out;

  }
</style>
