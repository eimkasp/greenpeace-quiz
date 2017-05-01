import Vue from 'vue'
import Router from 'vue-router'
import QuestionGroup from '@/components/QuestionGroup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Quiz',
      component: QuestionGroup
    }
  ]
})
