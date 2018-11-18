import {database} from '../Database/config';

export function removePost(index){
  
    return{
      type : 'REMOVE_POST',
      index : index
      
    }
  }
  
  export function addPost(post){
    return{
      type : 'ADD_POST',
      post : post
    }
  }
  
  export function addComment(comment,postId){
    return{
      type : 'ADD_COMMENT',
      comment,
      postId
    }
  }
  
  export function addingPost(post){
    return(dispatch)=>{
      return database.ref('Posts').update({[post.id] : post}).then(()=>{
        dispatch(addPost(post))
      }).catch((error)=>{
        console.log(error)
      })
    }
  }

  export function loadingPost(post){
    return(dispatch)=>{
      return database.ref('Posts').once('value').then((snapshot)=>{
        let Posts=[];
        snapshot.forEach((childSnapshot)=>{
          Posts.push(childSnapshot.val())
        })
        dispatch(loadPost(Posts))
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
  
 
  export function loadPost(post){
    return{
      type: 'LOAD_POST',
      post
    }
  }

  export function removingPost(index,id){
    return(dispatch)=>{
      return database.ref(`Posts/${id}`).remove().then(()=>{
        dispatch(removePost(index))
      }).catch((error)=>{
        console.log(error)
      })
    }
  }

  export function savingComment(comment,postId){
    return(dispatch)=>{
      return database.ref('Comments/'+postId).push(comment).then(()=>{
        dispatch(addComment(comment,postId))
      }).catch((error)=>{
        console.log(error)
      })
    }
  }

  export function loadingComment(){
    return(dispatch)=>{
      return database.ref('Comments').once('value').then((snapshot)=>{
        let Comments={}
        snapshot.forEach((childSnapshot)=>{
          Comments[childSnapshot.key]=Object.values(childSnapshot.val())
        })
        dispatch(loadComments(Comments))
      }).catch((error)=>{
        console.log(error)
      })
    }
  }
  
  export function loadComments(Comments){
    return{
      type: 'LOAD_COMMENTS',
      Comments
    }
  }
    {/*both k and v have the same name, so thar simply can be post and index*/ }
  