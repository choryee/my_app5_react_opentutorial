import React, { Component } from 'react';


class TOC extends Component{
/*19-7강 첨 */
shouldComponentUpdate(newProps, newState){
  console.log('TOC ShouldComponentUpdate', newProps.data, this.props.data);
if(this.props.data === newProps.data){
  return false;
}  
return true;
}


    render(){
      console.log('====== TOC');

      var lists = []; //15-3강.
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a 
        //href={"에서 {는 react의 JSX는 유사 html문법을 쓰므로 중괄호를 
       // 쓰는 것.즉, 중괄호는 JSX문법에서 나온 것  
            href={"/contents/"+data[i].id}
            data-id={data[i].id}
            onClick={function(e){
              console.log('e>>>>', e);
             // debugger;
              e.preventDefault();
              this.props.onChangePage(e.target.dataset.id);
            }.bind(this)}
            >{data[i].title}</a>
          </li>);
        i = i + 1;
      }

      return (
        <nav>
            <ul>
            { /*   <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
                */}
                {lists}
            </ul>
        </nav>
      );
    }
  }
export default TOC;