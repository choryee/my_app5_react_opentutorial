
터미널창에서 npm run start
자동으로 localhost://3000으로 뜸.

WEB
World Wid Web!

HTML
CSS
JavaScript

create
update
Welcome
Hello, React!!
이것 만든 것.(사진추가됨)


App.js 
18강.
   <TOC 
   //밑 TOC라는 하위에서 App.js에 전달하기 위해서는 밑 처럼, 이벤트를 
   만들어, setState를 사용해, mode와 selected_content_id를 변경하고
   있음
        onChangePage={function(id){
          // debugger;
          this.setState({
            mode:'read',
            selected_content_id:Number(id)
          });
        }.bind(this)}
        
//밑. 하위로 전달하기 위해, props를 사용하고 있음.
         data={this.state.contents}>
         </TOC>

