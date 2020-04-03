import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        grades: [
            {name: "Mahmoud" , degree: 85},
            {name: "Abdullah" , degree: 95},
            {name: "Ahmad" , degree: 93},
            {name: "Belal", degree: 81},
            {name: "Harbi" , degree: 88}
        ],
    }, 
    getters:{
        alphabetDegree: state => {
            var alphabetDegree =  state.grades.map(grade => {
                return {
                    name: grade.name,
                    degree: grade.degree >= 90 ? "A" : (grade.degree >= 80 ? "B" : "")
                }
            });
            return alphabetDegree;
        },

        studentsFilter: state => degree => {
            var studentsFilter = state.grades.filter(grade => {return grade.degree > degree});
            return studentsFilter;
        },
    },

    mutations: {
        addDegree: (state,payload) => {
            state.grades.forEach(grade => {
                grade.degree += payload;
            });
        }
    },

    actions:{
        addDegree: (state,payload) => {
            setTimeout(() => {
                state.commit('addDegree', payload);
            }, 3000);
        }
    }
})

