/* eslint-disable no-unused-vars */
var store = {
  debug: true,
  state: {
    totalScore: 0,
    questionIndex: 0,
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
  },
  setMessageAction (newValue) {
    this.debug && console.log('setMessageAction triggered with', newValue)
    this.state.message = newValue
  },
  clearMessageAction () {
    this.debug && console.log('clearMessageAction triggered')
    this.state.message = ''
  }
}
