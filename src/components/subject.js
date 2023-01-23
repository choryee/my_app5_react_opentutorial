import React, { Component } from 'react';

class Subject extends Component {
    render(){
      return (
        <header>
            <h1><a href="/" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(); // onChangePage()함수를 호출한것.
            }.bind(this)}>{this.props.title}</a></h1>
            {this.props.sub}
        </header>  
      );
    }
  }

  export default Subject;