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
  msg : any;
  messagebother:any;
  @Input() childDataName:string ;
  @Output() message = new EventEmitter();
  @ViewChild(ChildtwoComponent) child:ChildtwoComponent;
  constructor(
    private together:TogetherService,
    private bother:BotherService
  ) {
   }

  ngOnInit() {
    this.childDataName = "还没收到消息";
    this.child.getData();
    console.log(this.child.data);
  }
  sendmessage(){
    this.childDataName = "组件二发送的消息";
    this.message.emit(this.childDataName);
  }
  change(){
    // this.msg = "我是组件1";
    this.msg = this.together.sendmsg("我是组件1");
    console.log(this.msg);
  }
  see(){
    console.log(this.together.m);
  }
  send(){
    this.messagebother = this.bother.sendmessageto("组件1发送的消息");
    console.log(this.messagebother);
  }
  sendbother(){
    console.log(this.bother.m);
  }
}
