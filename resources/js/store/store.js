import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import StudentsModule from './modules/Students.js';
import TeachersModule from './modules/Teachers.js';

export const store = new Vuex.Store({
    modules: {
        Students: StudentsModule,
        Teachers: TeachersModule
      }
})





