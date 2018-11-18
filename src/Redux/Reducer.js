import {Posts} from '../Data/Posts';
import {combineReducers} from 'redux';

function comment(state=[],action){
  switch(action.type){
    case 'ADD_COMMENT' :  
      if(!state[action.postId]){
         return{...state,[action.postId]:
         [action.comment]}
      }else{
        return{...state,[action.postId]:
         [...state[action.postId],action.comment]}
      }
    case 'LOAD_COMMENTS' : return action.Comments

   
    default : return state
  }
   
}

function post(state = Posts ,action){
  
  switch(action.type){
    case 'REMOVE_POST': return[...state.slice(0,action.index),
    ...state.slice(action.index + 1)]
    case 'ADD_POST' : return[...state, action.post]
    case 'LOAD_POST' : return action.post
    default: return state;
  }
}
const rootReducer=combineReducers({post,comment})

export default rootReducer;