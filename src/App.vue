<template>
  <div id="app">
    <div class="container">
      <div class="answer">
        {{ totalScore }}
      </div>
      <question-group
              v-for="group in questionGroups"
              v-bind:group="group"></question-group>

    <div class="button"
         v-on:click="countScore()">I'm done</div>
    </div>


  </div>
</template>

<script>
  import QuestionGroup from './components/QuestionGroup'

  export default {
    name: 'app',
    components: {
      QuestionGroup
    },
    data () {
      return {
        totalScore: 0,
        questionGroups: [
          {
            groupTitle: 'Group1',
            selected: false,
            groupScore: 0,
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
    },
    methods: {
      countScore: function () {
        alert('count')
        let total = 0
        this.questionGroups.filter(function (val) {
          console.log(val.groupScore)
          if (val.groupScore) {
            total += val.groupScore
          }
        })
        console.log(total)
        this.totalScore = total
      }
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .container {
    width: 600px;
    margin: 0 auto;
  }
  .answer {
    position: fixed;
    width: 100%;
    background: green;
    left: 0;
    top: 0;
  }
</style>
