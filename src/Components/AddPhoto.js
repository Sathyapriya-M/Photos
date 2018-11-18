import React,{Component} from 'react';

class AddPhoto extends Component{
  constructor(){
    super();
    this.onSubmitData=this.onSubmitData.bind(this);
  }
  onSubmitData(event){
      event.preventDefault();  
      const imageLink=event.target.elements.link.value;
      const description=event.target.elements.description.value;
      const post={
        id: Number(new Date()),
        imageLink: imageLink,
        description: description
      }
      if(description && imageLink){
        this.props.addingPost(post)
        //this.props.addPost(post);
        this.props.onHistory.push('/PhotoWall');
      }
  }
  render(){
    return(
      <div>
        <h3>AddPhoto</h3>
        <div className='form'>
          <form onSubmit={this.onSubmitData}>
            <input type='text' name='link' placeholder="Link" />
            <input type='text' name='description'
             placeholder="Description"/>
            <button>Post</button>
        </form>
        </div>
      </div>
    )
  }
}
export default AddPhoto