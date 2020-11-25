import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './reducer/store'
import Test from './ReducerTester'
import AddTodo from './Todo/AddTodo'
import TodoList from './Todo/TodoList'
import Filter from './Todo/Filter'

export default class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <AddTodo/>
          <TodoList/>
          <Filter/>
        </Provider>
    )
  }
}

