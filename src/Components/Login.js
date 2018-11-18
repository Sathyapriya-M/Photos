import React,{Component} from 'react';

class Login extends Component{
  constructor(){
    super();
    this.onSubmitData=this.onSubmitData.bind(this)
  }
onSubmitData(event){
  event.preventDefault();
  const id=event.target.elements.id.value;
  const pw=event.target.elements.password.value;
  
  if(id == 123 && pw == "abcd"){
    this.props.onHistory.push('/PhotoWall');
  }
}
 render(){
    return(
      <div className='form'>
          <form onSubmit={this.onSubmitData}>
            <input type='text' name='id' placeholder="id" />
            <input type='text' name='password'
             placeholder="password"/>
            <button>Submit</button>
        </form>
        </div>
    )
  }
}

export default Login
