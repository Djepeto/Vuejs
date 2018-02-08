<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="well">
                    <h2>Create a New Todo</h2>
                    <form>
                        <div class="form-group">
                            <label for="todoitem">Todo Item</label>
                            <input type="text" v-model="input" class="form-control" id="todoitem" placeholder="Todo Item" />
                        </div>
                        <button type="button" v-on:click="add()" class="btn btn-default">Create</button>
                        <button type="button" v-on:click="remove()" class="btn btn-default">Remove</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2>List</h2>
                <ul class="list-group">
                    <li v-for="(todo, index) in todos" :key="index" class="list-group-item">
                        {{ index }}: {{ todo }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>




<script>
    export default {
        name: "Todo",
        data () {
            return {
                todos: [],
                input: ""
            }
        },
        methods: {
            add() {
                this.todos.push(this.input);
                this.input = "";
            },
            remove() {
                this.todos.pop(this.input);
                this.input = "";
            }
        }
    }
</script>



<style>
    .row {
        margin:0;
        width: 100%;
    }
    .row .col-md-12{
        padding:0;
    }
</style>















