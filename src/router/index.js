import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import inline_editor from '@/components/inline_editor'
import Order_Form from '@/components/Order_Form'
import Instant_Search from '@/components/Instant_Search'
import Grid_Switch from '@/components/Grid_Switch'
import events from '@/components/events'

Vue.use(Router);

export default new Router({
    routes: [
        {
            title: 'Todo list',
            path: '/todo',
            name: 'Todo',
            component: Todo
        },
        {
            title: 'Inline editor',
            path: '/inline_editor',
            name: 'inline_editor',
            component: inline_editor
        },
        {
            title: 'Order Form',
            path: '/Order_Form',
            name: 'Order_Form',
            component: Order_Form
        },
        {
            title: 'Instant_Search',
            path: '/Instant_Search',
            name: 'Instant_Search',
            component: Instant_Search
        },
        {
            title: 'Grid_Switch',
            path: '/Grid_Switch',
            name: 'Grid_Switch',
            component: Grid_Switch
        },
        {
            title: 'events',
            path: '/events',
            name: 'events',
            component: events
        }

    ]
})
Grid_Switch