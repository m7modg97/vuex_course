
window.Vue = require('vue');


import RootComponent from './components/RootComponent.vue';
Vue.component('root-component', RootComponent);

import ListOne from './components/ListOne.vue';
Vue.component('list-one', ListOne);

import ListTwo from './components/ListTwo.vue';
Vue.component('list-two', ListTwo);


const app = new Vue({
    el: '#app',
});
