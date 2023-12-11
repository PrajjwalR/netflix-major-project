import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TVShowsView from '../views/TVShowsView.vue'
import MoviesView from '../views/MoviesView.vue'
import NewAndPopularView from '../views/NewAndPopularView.vue'
import MyList from '../views/MyListView.vue'
import ByLanguage from '../views/ByLanguageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/tvshows',
      name: 'TVShows',
      component: TVShowsView
    },
    {
      path: '/movies',
      name: 'Movies',
      component: MoviesView
    },
    {
      path: '/newandpopular',
      name: 'NewAndPopular',
      component: NewAndPopularView
    },
    {
      path: '/mylist',
      name: 'MyList',
      component: MyList
    },
    {
      path: '/bylanguage',
      name: 'ByLanguage',
      component: ByLanguage
    }
  ]
})

export default router
