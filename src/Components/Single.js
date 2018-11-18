import React,{Component} from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component{
  render(){
   
    const {match,Posts}=this.props;
    const id=Number(match.params.id);
    const post=Posts.find((post)=>(post.id === id))
    const comment=this.props.comment[id] || [];
    const index=this.props.Posts.findIndex((post)=>(post.id)===id)
    if(this.props.loading === true ){
      return <div className='loader'> ...loading </div>
    }else if(post){
      return(
        <div className='single-photo'>
        
        <Photo post={post} {...this.props} index={index}/>
        <Comments savingComment={this.props.savingComment} comment={comment}
        id={id}/>
        </div>
      )
    }else{
      return <h3>no post found</h3>
    }    
  }
}

export default Single