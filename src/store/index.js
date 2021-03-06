import Vue from 'vue'
import Vuex from 'vuex'
import {login} from './modules/login.js'
import {auth} from './modules/auth.js'
import {membership} from './modules/membership.js'
import {myPage} from './modules/mypage.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    login,
    auth,
    membership,
    myPage
  }
})
