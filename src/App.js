import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent"
import Subject from "./components/subject"
import Control from "./components/Control"
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
   this.max_content_id=3;

    this.state = {
      mode:'welcome',
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

  getReadContent(){
    var i=0;
    while(i<this.state.contents.length){ //20-1강
      var data=this.state.contents[i];
      if(data.id === this.state.selected_content_id){
       return data;
        break;
      }
      i=i+1;
    }
  }

  getContent(){
    var _title, _desc, _article = null;
    if(this.state.mode ===  'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    } else if(this.state.mode === 'read'){
     var _content=this.getReadContent();
     _article= <ReadContent title={_content.title} desc={_content.desc}></ReadContent>

    }else if(this.state.mode === 'create'){
      _article=<CreateContent onSubmit={function(_title, _desc){
          console.log('>>>>>>', _title, _desc)
          this.max_content_id +=1;
          // this.state.contents.push(
          // {id:this.max_content_id, title:_title, desc:_desc}
          // );
          var _contents= this.state.contents.concat(
            {id:this.max_content_id, title:_title, desc:_desc}
          )
          this.setState({
            contents:_contents,
            mode:'read',
            selected_content_id:this.max_content_id
          })
      }.bind(this)}></CreateContent>
    
  
}else if (this.state.mode === 'update'){
    _content = this.getReadContent();
    _article=<UpdateContent data={_content} onSubmit={
      function(_id, _title, _desc){
        console.log('>>>>>>', _title, _desc)
       // this.max_content_id +=1;
        // this.state.contents.push(
        // {id:this.max_content_id, title:_title, desc:_desc}
        // );
        var _contents= Array.from(this.state.contents);
        // var _contents= this.state.contents.concat(
        //   {id:this.max_content_id, title:_title, desc:_desc}
        // )
        var i=0;
        while(i<_contents.length){
          if(_contents[i].id === _id){
            _contents[i]={id:_id, title:_title, desc:_desc};
            break;
          }
          i=i+1;
        }
        this.setState({
          contents:_contents,
          mode:'read'
        });
    }.bind(this)}></UpdateContent>
  }
  return _article;
  }

  
  render() {
    console.log('App render');   

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

    
        <Control onChangeMode={function(_mode){
          if(_mode  === 'delete'){
            if(window.confirm('정말로??')){
              var _contents=Array.from(this.state.contents);
              var i=0;
              while(i<_contents.length){
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break;
                }
                i=i+1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              })
              alert('deleted completion!!')
            }
          }else {
          this.setState({            
            mode:_mode
          })
        }
        }.bind(this)} ></Control>
       {this.getContent()}
      </div>
    );
  }
}
export default App;