import {FETCH_TODOS,ADD_TODO,DELETE_TODO,TOGGLE_COMPLETE} from "./types";
import {uuid} from 'uuidv4';


export const fetchTodos=()=> dispatch=> {
    console.log('fetching')
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(todos => dispatch({
            type: FETCH_TODOS,
            payload: todos
        }))
}


export const addTodo=(todoData)=> dispatch=> {
    const data={
        id:Math.random(),
        title:todoData,
        completed:false,

    }
    dispatch(
        {
            type:ADD_TODO,
            payload:data
        }
        )
}

export const deleteTodo=(index)=> dispatch=> {
    dispatch(
        {
            type:DELETE_TODO,
            payload:index
        }
    )

}


export const toggleCompleted=(index)=> dispatch=> {
    dispatch(
        {
            type:TOGGLE_COMPLETE,
            payload:index
        }
    )
}
