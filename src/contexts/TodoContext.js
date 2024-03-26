import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false,

        }
        
    ],//properties
    //methods
    addTodo: (todo) => {},
    updatedTodo: (id,todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {},

});

export const useTodo = () => {//export hook
    return useContext(TodoContext);
}
export const TodoProvider = TodoContext.Provider;
