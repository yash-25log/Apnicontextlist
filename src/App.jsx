// import { useState } from 'react'npm 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import { TodoForm, TodoItem } from './components'

function App() {
  const [todos, setTodos] = useState([])//empty array-since we'll loop
  //todos is our array
  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo},...prev])//we need access to prev state thatsehy used callback
    //...prev - destructured prev state / object

  }
  const updatedTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? {...todo, completed: !todo.completed} : todo)))
  }

  useEffect(() => {
    const todos  = JSON.parse(localStorage.getItem("todos")) // value is string but we need json
    if(todos && todos.length > 0){// check if todos is not null
      setTodos(todos)
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))//key value pair
  }, [todos])
  


  return (
    <TodoProvider value={{todos,addTodo,updatedTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (//means auto return instead of curly where u need to return manuallyl
                        //bad performance of using index as key instead use unique key
                        //for knowing unique div
                            <div key={todo.id}
                            className='w-full'>
                              <TodoItem todo= {todo}/> 
                              
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
