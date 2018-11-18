import React,{ Component } from 'react';
import Title from './Title';
import PhotoWall from './PhotoWall';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';
import {removePost} from '../Redux/Actions';
import {Link} from 'react-router-dom';
import Login from './Login';
import Single from './Single';

class Main extends Component{
  state = { loading :true }
  componentDidMount(){
    this.props.loadingPost().then(()=>{
      this.setState({loading : false})
    });
    this.props.loadingComment();
  }

  render(){
  //console.log(this.props.Posts)
    return(
    <div>
    <Route exact path='/' render={({history})=>(
         <div>
         <Login onHistory={history}/>
         </div>          
    )}/>
     <Route path='/PhotoWall' render={()=>(
        <div>
        <h1><Link to="">Logout</Link></h1>
          <Title title={'PhotoWall'}/>
          <PhotoWall {...this.props}/>
        </div>
     )}/>
     <div>  
     
     <Route path='/AddPhoto' render={({history})=>(
       <div>
       <h1><Link to="/PhotoWall">GoToPhotoWall</Link></h1>
        <AddPhoto {...this.props} onHistory={history}/>
        
        </div>
     )} />  

     <Route path='/Single/:id' render={(params)=>(
       <div>
       <Single loading={this.state.loading} {...this.props} {...params}/>
       </div>
     )}/>
          </div>
    </div>
    );
  }
}

export default Main