import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./content"
import Subject from "./components/subject"
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
   
    this.state = {
      mode:'read',
      selected_content_id:2, // 17-3강.
      subject:{title:'WEB', sub:'World Wid Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }

  render() {
    console.log('App render');
    
    var _title, _desc = null;
    if(this.state.mode ===  'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if(this.state.mode === 'read'){
      var i=0;
      while(i<this.state.contents.length){ //17-3강
        var data=this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i=i+1;
      }
     
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){ //17.1강.
              this.setState({mode:'welcome'});
            }.bind(this)}
            >
        </Subject>


         {/* <header> //17-1강에서 비활성화 함.
            <h1><a href="/" onClick={function(e){
              console.log(e);
              e.preventDefault(); //<a href="/" 의 기능 막는 것. 
             // this.state.mode='welcome'; <-이처럼 맨 위 생성자로 변수등을 변경해야지, 위 생성자가
             //생성후, 바로 위 줄처럼 변경하면 안된다. 하려면, 밑처럼 setState()함수 써야. 16.5강.
             this.setState({
              mode:'welecome'              
             });
//밑 bind는 {function(e){에서 this가 undefined이지만, 강제로 App의 this를
// {function(e){ 안에서 this가 되게 한다. 16.4강. 첨.
            }.bind(this)}>{this.state.subject.title}</a></h1>
                 {this.state.subject.sub}
        </header>   */}

        <TOC 
        onChangePage={function(id){
          // debugger;
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
         data={this.state.contents}>
         </TOC>


        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;