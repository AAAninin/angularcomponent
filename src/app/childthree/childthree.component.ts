import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BotherService } from '../bother.service';

@Component({
  selector: 'app-childthree',
  templateUrl: './childthree.component.html',
  styleUrls: ['./childthree.component.css']
})
export class ChildthreeComponent implements OnInit {
  @Input() childDataName:{
    data : any,
    change: boolean
  } ;
  @Output() message = new EventEmitter();
  constructor(private bother:BotherService) { }

  ngOnInit() {
    this.bother.twoeventBus.subscribe((value)=>{
      // this.events.push(value+"-"+new Date());
      alert("组件3收到的消息为"+value);
    });
  }
  send(){
    this.bother.eventBus.next("你好，我是组件3");
  }
  sendmessage(){
    this.childDataName.data = "你好，我是组件3";
    this.childDataName.change = true;
    this.message.emit(this.childDataName);
  }
}
