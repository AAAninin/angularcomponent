import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fatherData: {
    data: string,
    change:boolean
  };
  constructor(){
    this.fatherData = {
      data:"",
      change : false
    };
  }
  sendmessage(){
   this.fatherData.data="你好， 我是父组件";
   this.fatherData.change = true;
  }
  message(i:{data:any,change:boolean}){
    if(i.change){
      alert("父组件收到了消息,消息为"+i.data);
    }
  }
}
