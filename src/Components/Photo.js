import React,{ Component } from 'react';
import {Link} from 'react-router-dom';


class Photo extends Component{


  render(){
    
     const post=this.props.post
    return(
      <div className="figure">
        <figure >
        <Link to={`/Single/${post.id}`} ><img className="photo" 
            src= {post.imageLink} 
            alt={post.description}/></Link>
          
          <figcaption><p>{post.description}</p></figcaption>
          <div className="button">
            <button className="remove-button" onClick={()=>{
              this.props.removingPost(this.props.index,post.id)
              //this.props.removePost(this.props.index)
              this.props.history.push('/PhotoWall')
              }}>Remove</button>
              <Link to={`/Single/${post.id}`} className='button'>
              <div className='comment-button'>
              <div className='comment-count'>
                <div className='speech-bubble'></div>
                {this.props.comment[post.id] ? 
                 this.props.comment[post.id].length:0}
              </div>
              </div>
              </Link>
              
          </div>
      </figure> 
    </div>
    )
  }
}
{/*Photo.propTypes={
 
  onRemovePhoto : PropTypes.func.isRequired
}*/}
export default Photo