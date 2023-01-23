import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      console.log('content render');
      
      return (
        <article>
            <h2>create</h2>
            <form action='/create_process' method='post'
             onSubmit={function(e){
              e.preventDefault();
             // alert('submitt--------')
            // debugger;
            this.props.onSubmit(
              e.target.title.value,
              e.target.desc.value
            );
             }.bind(this)}
            >
              <p><input type="text" name='title' placeholder='title'></input> </p>
              <p>
                <textarea name='desc' placeholder='description'></textarea>
              </p>
              <p><input type="submit"></input></p>
            </form>

        </article> 
      );
    }
  }
  export default CreateContent;