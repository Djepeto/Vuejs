// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var todo = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

var events = new Vue({
    el: '#events',
    // Here we can register any values or collections that hold data
    // for the application
    data: {
        event: { name: '', description: '', date: '' },
        events: []
    },

// Anything within the ready function will run when the application loads
    ready: function() {
        // When the application loads, we want to call the method that initializes
        // some data
        this.fetchEvents();
    },

// Methods we want to use in our application are registered here




});
