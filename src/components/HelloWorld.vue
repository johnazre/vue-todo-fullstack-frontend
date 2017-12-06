<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Title: <input type="text" v-model="title"></p>
    <p>Description: <input type="text" v-model="description"></p>
    <button @click="addTodo(title, description)">Submit</button>
    <ul>
      <li v-for="todo in theTodos">{{todo.title}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Todo List',
      title: '',
      description: ''
    }
  },
  methods: {
    async getTodos() {
      this.$store.dispatch('getTheTodos')
    },
    async addTodo() {
      console.log('this', this)

      let todo = {
        title: this.title,
        description: this.description
      }
      this.$store.dispatch('addTodo', todo)
      this.title = ''
      this.description = ''
    }
  },
  created: function() {
    this.getTodos();
  },
  computed: {
    theTodos() {
      return this.$store.state.todos
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
