import React,{ Component} from 'react';
import Photo from './Photo';
import {Link} from 'react-router-dom';

 class PhotoWall extends Component{
   render(){
   
     return(
       <div>
       <Link className='addIcon' to='/AddPhoto'></Link>
       <div className="photo-grid">
       {this.props.Posts
       .sort(function(x,y){
         return y.id - x.id;
       })
       .map((post,index)=><Photo key={index}
       post={post} {...this.props} index={index}/>)}
       </div>
       </div>
     )
   }
 }

 export default PhotoWall