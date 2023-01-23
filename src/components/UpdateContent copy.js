import React, { Component } from 'react';

class UpdateContent extends Component{
    constructor(props){
      super(props);
      this.state={
        id:this.props.data.id,
        title:this.props.data.title,
        desc:this.props.data.desc
      }
    }


    inputFormHander(e){
      this.setState({[e.target.name]:e.target.value})
    }

    render(){
      console.log(this.props.data);
      console.log('UpdateContent render');
      
      return (
        <article>
            <h2>update</h2>
            <form action='/create_process' method='post'
             onSubmit={function(e){
              e.preventDefault();
             // alert('submitt--------')
            // debugger;

            this.props.onSubmit(
              this.state.id,
              e.target.title.value,
              e.target.desc.value
            );
             }.bind(this)}
             >
             <input type="hidden" name="id" value={this.state.id}></input>
            
              <p><input 
              type="text" 
              name='title' 
              placeholder='title'
              value={this.state.title}
              OnChange={this.inputFormHander().bind(this)}
              ></input> </p>

              <p>
                <textarea OnChange={function(e){
                //console.log(e.target.value)
                this.setState({desc:e.target.value})
              }.bind(this)} 
              name='desc' 
              laceholder='description' 
              value={this.state.desc}></textarea>
              </p>
              <p><input type="submit"></input></p>
            </form>

        </article> 
      );
    }
  }
  export default UpdateContent;