<template>
  <div id="app">
    <router-link :to="{ path: '/'}">
      <img src="./assets/logo.png">
    </router-link>
    <div id="main">
      <nav v-bind:class="active" v-on:click.prevent>
        <li v-for="routeName in routeNames">
          <router-link :to="{ name: routeName}">
          {{ routeName }}
          </router-link>
        </li>
      </nav>

    </div>
    <router-view/>
  </div>
</template>

<script>

    import Todo from './components/Todo'
    import inline_editor from './components/inline_editor'
    import Order_Form from '@/components/Order_Form'
    import Instant_Search from '@/components/Instant_Search'
    import Grid_Switch from '@/components/Grid_Switch'
    import events from '@/components/events'


export default {
  name: 'App',
  components: {
      Todo,
      inline_editor,
      Order_Form
  },
        data() {
           return {
               active: 'Todo',
               routeNames: ['Todo', 'inline_editor', 'Order_Form', 'Instant_Search', 'Grid_Switch' , 'events', 'advanced examples'],

           }
        },
        methods: {
            makeActive: function(item){
                this.active = item;
            }
        }
};

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
*{
  margin:0;
  padding:0;
}

body{
  font:15px/1.3 'Open Sans', sans-serif;
  color: #5e5b64;
  text-align:center;
}

a, a:visited {
  outline:none;
  color:#389dc1;
}

a:hover{
  text-decoration:none;
}

section, footer, header, aside, nav{
  display: block;
}

/*-------------------------
    The menu
--------------------------*/
#main{
  position:relative;
  padding-top: 50px;
}
form#main{
    padding-top:15px;
    padding-bottom:100px;
}
nav{
  width:100%;
  display:inline-block;
  background-color:#5597b4;
  box-shadow:0 1px 1px #ccc;
  border-radius:2px;
}
nav li{
  display: inline-block;
}
nav a{
  display:inline-block;
  padding: 18px 30px;
  color:#fff !important;
  font-weight:bold;
  font-size:16px;
  text-decoration:none !important;
  line-height:1;
  text-transform: uppercase;
  background-color:transparent;

  -webkit-transition:background-color 0.25s;
  -moz-transition:background-color 0.25s;
  transition:background-color 0.25s;
}

nav a:first-child{
  border-radius:2px 0 0 2px;
}

nav a:last-child{
  border-radius:0 2px 2px 0;
}

nav .router-link-active{
  background-color:#e35885;
}

p{
  font-size:22px;
  font-weight:bold;
  color:#7d9098;
}

p b{
  color:#ffffff;
  display:inline-block;
  padding:5px 10px;
  background-color:#c4d7e0;
  border-radius:2px;
  text-transform:uppercase;
  font-size:18px;
}

</style>
