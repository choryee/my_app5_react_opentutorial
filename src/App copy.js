import React, { Component } from 'react';
import TOC from './components/TOC';
import Content from './content';
import Subject from './components/subject';
import './App.css';



class App extends Component {
  constructor(props){
    super(props); // 15-2강. 컴포넌트가 실행될때, render()함수
 //보다 먼저 실행되어. 초기화할때는  constructor에 그 값을 넣는다.[]는 배열 의미
 //App이라는 부모는 state를 만들었고, 자식이 그것을 받을때는 props로 받는다.
 this.state={
  mode:'read',
   subject:{title:'WEB', sub:'world best,kim'},
   welcome:{title:'welcome', desc:'Hello, React!!!!'},
   content: [ 
      {id:1, title:'HTML', desc: 'HTML배열사용 is Hyper....'},
      {id:2, title:'CSS', desc: 'CSS is design'},
      {id:1, title:'JavaScript', desc: 'JavaScript is for interactive'}
   ] //-
 } //--this.state 
  }//--constructor

  render() {
    // 16.1강
    console.log('App render');
    var _title, _desc=null;
    if(this.state.mode==='welcome'){
      _title=this.state.welcome.title;
      _desc=this.state.welcome.desc;
    }else if(this.state.mode==='read'){
      _title=this.state.content[0].title;
      _desc=this.state.content[0].desc;

    }

    return (
      <div className="App">
      
        {/* <Subject title={this.state.subject.title} //상위 컴포넌트인 App의 상태를 하위 컴포넌트에 전달하기 위해,// ""는 문자열로 인식하고, {}안에 들어 온것은 자바스크립트로 인식한다.    props를 사용한 꼴.
                 sub={this.state.subject.sub}> 
        </Subject> */}

        {/* 밑. 16.2강 */}
        <header> 
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
        </header>  
        -------------------------------------------------------- 
        <TOC data={this.state.content}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;