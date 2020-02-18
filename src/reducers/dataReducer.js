import { FETCH_TODOS,ADD_TODO,DELETE_TODO,TOGGLE_COMPLETE} from '../actions/types';
import {uuid} from 'uuidv4';

const initialState = {
    todos: [
        {
            id:1,
            title:'Shopping for the list items',
            description:"Go to the market and fetch all the items that are available",
            completed:true
        },
        {
            id:2,
            title:'Introduction to the Future',
            description:"I am new to this React native and javascript as a whole. I am trying to pass data from one screen to another using wix react native navigation. Here is my code On screen one",
            completed:false
        },
        {
            id:3,
            title:'Shopping for the list items',
            description:"Go to the market and fetch all the items that are available",
            completed:false
        },
        {
            id:4,
            title:'Introduction to the Future',
            description:"I am new to this React native and javascript as a whole. I am trying to pass data from one screen to another using wix react native navigation. Here is my code On screen one",
            completed:true
        },
        {
            id:5,
            title:'Shopping for the list items',
            description:"Go to the market and fetch all the items that are available",
            completed:false
        },
        {
            id:6,
            title:'Introduction to the Future',
            description:"I am new to this React native and javascript as a whole. I am trying to pass data from one screen to another using wix react native navigation. Here is my code On screen one",
            completed:false
        }
    ],
    counter: 0,
    loading:false
}

//Checking the necessary actions

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS:
            console.log('FETCH_TODOs REDUCER')
            console.log(action.payload)
            return {
                ...state,
                todos: action.payload
            }
        case ADD_TODO:
            // console.log('ADD_TODO REDUCER')
            // console.log(action.payload)
            return {
                ...state,
                todos: [action.payload,...state.todos]
            }
        case TOGGLE_COMPLETE:
            console.log('TOGGLE_COMPLETE REDUCER')
            console.log(action.payload)
            // return state
            return{
                ...state,

                todos:[...state.todos.slice(0,action.payload),{...state.todos[action.payload],completed:!state.todos[action.payload].completed},...state.todos.slice(action.payload+1),]
            };
        case DELETE_TODO:
            console.log('DELETE_TODO REDUCER')
            console.log(action.payload)
            // return state
            return{
                ...state,
                todos:[...state.todos.slice(0,action.payload),...state.todos.slice(action.payload+1),]
            };


        case 'INCREASE_COUNTER':
            return {counter:state.counter+1}
        case 'DECREASE_COUNTER':
            return {counter:state.counter-1}
        default:
            return state;
    }
}
