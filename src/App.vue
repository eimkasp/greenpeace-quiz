<template>
  <div id="app">
    <div class="container">
      <question-group
              v-for="group in questionGroups"
              v-bind:group="group"></question-group>
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
        questionGroups: [
          {
            groupTitle: 'Group1',
            selected: false,
            questions: [{
              title: 'Question 1',
              image: 'https://cdn.pixabay.com/photo/2017/04/24/00/16/auto-2255161_1280.jpg',
              done: false,
              selected: false
            }, {
              title: 'Question 2',
              image: 'https://cdn.pixabay.com/photo/2017/04/08/10/23/surfer-2212948_1280.jpg',
              done: true,
              selected: false
            }, {
              title: 'Question 3',
              image: 'https://cdn.pixabay.com/photo/2017/04/24/13/28/photographer-2256456_1280.jpg',
              done: false,
              selected: false
            }, {
              title: 'Question 4',
              image: 'https://wallpaperbrowse.com/media/images/stunning-images-of-the-space.jpg',
              done: false,
              selected: false
            }]
          },
          {
            groupTitle: 'Group2',
            selected: false,

            questions: [{
              title: 'Question 3',
              image: 'https://cdn.pixabay.com/photo/2017/04/24/00/16/auto-2255161_1280.jpg',
              done: false,
              selected: false

            }, {
              title: 'Question 5',
              image: 'https://cdn.pixabay.com/photo/2017/04/08/10/23/surfer-2212948_1280.jpg',
              done: true,
              selected: false

            }, {
              title: 'Question 11',
              image: 'https://wallpaperbrowse.com/media/images/stunning-images-of-the-space.jpg',
              done: false,
              selected: false

            }, {
              title: 'Question 55',
              image: 'https://wallpaperbrowse.com/media/images/stunning-images-of-the-space.jpg',
              done: false,
              selected: false

            }]
          },
          {
            groupTitle: 'Group3',
            selected: false,

            questions: [{
              title: 'Question 3',
              image: 'https://cdn.pixabay.com/photo/2017/04/24/00/16/auto-2255161_1280.jpg',
              done: false,
              selected: false

            }, {
              title: 'Question 5',
              image: 'https://cdn.pixabay.com/photo/2017/04/08/10/23/surfer-2212948_1280.jpg',
              done: true,
              selected: false

            }, {
              title: 'Question 11',
              image: 'https://wallpaperbrowse.com/media/images/stunning-images-of-the-space.jpg',
              done: false,
              selected: false

            }, {
              title: 'Question 55',
              image: 'https://wallpaperbrowse.com/media/images/stunning-images-of-the-space.jpg',
              done: false,
              selected: false

            }]
          }
        ]
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
</style>
