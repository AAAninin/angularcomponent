import { Component, OnInit } from '@angular/core';
import { TogetherService } from '../together.service';
import { BotherService } from '../bother.service';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.css']
})
export class ChildtwoComponent implements OnInit {
  data = 1;
  constructor(private together:TogetherService) { }

  ngOnInit() {
    this.together.eventBus.subscribe((value)=>{
      // this.events.push(value+"-"+new Date());
      alert("组件2收到的消息为"+value);
    });
  }
  getData(){
    console.log("子组件的方法");
  }
  changemsg(){
    this.together.twoeventBus.next("你好，我是组件2");
  }
}
