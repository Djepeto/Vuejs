<template>
   <div id="events_container">
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <a class="navbar-brand"><i class="glyphicon glyphicon-bullhorn"></i> Vue Events Bulletin Board</a>
        </div>
    </nav>

    <!-- main body of our application -->
    <div class="container" id="events">

        <!-- add an event form -->
        <div class="col-sm-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3>Add an Event</h3>
                </div>
                <div class="panel-body">
                    <!--adding the form-->
                    <div class="form-group">
                        <input class="form-control" placeholder="Event Name" v-model="event.name">
                    </div>

                    <div class="form-group">
                        <textarea class="form-control" placeholder="Event Description" v-model="event.description"></textarea>
                    </div>

                    <div class="form-group">
                        <input type="date" class="form-control" placeholder="Date" v-model="event.date">
                    </div>

                    <button type="button" v-on:click="addEvent()" class="btn btn-primary">Sumbit</button>
                    <!--end of form-->
                </div>

            </div>
        </div>

        <!-- show the events -->
        <div class="col-sm-6">
            <div class="list-group">

                <a href="#" class="list-group-item" v-for="event in events">
                    <h4 class="list-group-item-heading">
                        <i class="glyphicon glyphicon-bullhorn"></i>
                        {{ event.name }}
                    </h4>

                    <h5>
                        <i class="glyphicon glyphicon-calendar" v-if="event.date"></i>
                        {{ event.date }}
                    </h5>

                    <p class="list-group-item-text" v-if="event.description">{{ event.description }}</p>

                    <button class="btn btn-xs btn-danger" v-on:click="deleteEvent($index)">Delete</button>
                </a>

            </div>
        </div>
    </div>
   </div>
</template>


<!--https://scotch.io/tutorials/build-an-app-with-vue-js-a-lightweight-alternative-to-angularjs#toc-adding-the-form-->
<!--This code example is done using the tutorial above, there is a backend addition to this, if we have drupal for example serving the data-->
 <script>
     export default {
         name: 'events',

         data() {
             return {
                 ready: function() {
                     // When the application loads, we want to call the method that initializes
                     // some data
                     this.fetchEvents();
                 },
                 // The data model. These items would normally be requested via AJAX,
                 // but are hardcoded here for simplicity.

                 event: { name: '', description: '', date: '' },
                 events: []
             }
         },

         // Functions we will be using.
         methods: {

             // We dedicate a method to retrieving and setting some data
             fetchEvents: function() {
                 var events = [
                     {
                         id: 1,
                         name: 'TIFF',
                         description: 'Toronto International Film Festival',
                         date: '2015-09-10'
                     },
                     {
                         id: 2,
                         name: 'The Martian Premiere',
                         description: 'The Martian comes to theatres.',
                         date: '2015-10-02'
                     },
                     {
                         id: 3,
                         name: 'SXSW',
                         description: 'Music, film and interactive festival in Austin, TX.',
                         date: '2016-03-11'
                     }
                 ];
                 // $set is a convenience method provided by Vue that is similar to pushing
                 // data onto an array
                 this.$set('events', events);
             },

             // Adds an event to the existing events array
             addEvent: function() {
                 if(this.event.name) {
                     this.events.push(this.event);
                     this.event = { name: '', description: '', date: '' };
                 }
             },
             deleteEvent: function(index) {
                 if(confirm("Are you sure you want to delete this event?")) {
                     // $remove is a Vue convenience method similar to splice
                     this.events.splice(index);
                 }
             }
         }
     }

 </script>

<style scoped>
    nav a {
        color: #333!important;
    }
</style>