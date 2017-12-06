import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: []
  },
  mutations: {
    getTodos(state, responseFromTheServer) {
      console.log('data', responseFromTheServer.data)
      state.todos = responseFromTheServer.data
      console.log('state', state)
    },
    addTodo(state, {title, description}) {
      let newTodo = {
        title,
        description
      }
      state.todos.push(newTodo)
    }
  },
  actions: {
    async getTheTodos(context) {
      let todos = await axios.get(`http://localhost:8000/todos`)
      context.commit('getTodos', todos)
    },
    async addTodo(context, todo) {
      let newTodo = await axios.post(`http://localhost:8000/todos`, todo)
      context.commit('addTodo', todo)
    }
  }
})
