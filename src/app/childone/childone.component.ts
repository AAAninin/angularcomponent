import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ChildtwoComponent } from '../childtwo/childtwo.component';
import { TogetherService } from '../together.service';
import { BotherService } from '../bother.service';

@Component({
  selector: 'app-childone',
  templateUrl: './childone.component.html',
  styleUrls: ['./childone.component.css']
})
export class ChildoneComponent implements OnInit {
  sendtwomsg:{
    data:any,
    change:boolean
  }
  sendbothermsg:{
    data:any,
    change:boolean
  }
  @Input() childDataName:{
    data:any,
    change:boolean
  };
  @Output() message = new EventEmitter();
  @ViewChild(ChildtwoComponent) childtwo:ChildtwoComponent;
  constructor(
    private together:TogetherService,
    private bother:BotherService
  ) {
    
  }

  ngOnInit() {
    // if(this.childDataName.change){
    //   alert("收到消息，消息为"+this.childDataName.data);
    //   this.childDataName.change = false;
    // }
    this.together.twoeventBus.subscribe((value)=>{
      // this.events.push(value+"-"+new Date());
      alert("组件1收到的消息为"+value);
    });
    this.bother.eventBus.subscribe((value)=>{
      // this.events.push(value+"-"+new Date());
      alert("组件1收到的消息为"+value);
    });
    console.log(this.childtwo.data);
  }
  sendmessage(){
   this.childDataName.data = "你好,我是组件1";
   this.childDataName.change = true;
   this.message.emit(this.childDataName);
  //  this.childDataName.change = false;
  }
  change(){
    this.bother.twoeventBus.next("你好，我是组件1");
  }
  send(){
    this.together.eventBus.next("你好，我是组件1");
  }
}
