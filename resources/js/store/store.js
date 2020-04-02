import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        grades: [
            {name: "Mahmoud" , degree: 85},
            {name: "Abdullah" , degree: 99},
            {name: "Ahmad" , degree: 93},
            {name: "Belal", degree: 81},
            {name: "Harbi" , degree: 88}
        ],
    }
})

