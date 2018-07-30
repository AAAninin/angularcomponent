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
  beforemsg:any;
  togethermsg:any;
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
    console.log(this.together.sendmsg("我是组件1"));
  }
  see(){
    // console.log(this.together.m);
    if(this.togethermsg != this.together.m){
      this.togethermsg = this.together.m;
      alert(this.togethermsg);
      }  
  }
  send(){
    console.log(this.bother.sendmessageto("组件1发送的消息"));
  }
  sendbother(){
    if(this.beforemsg != this.bother.m){
      this.beforemsg = this.bother.m;
      alert(this.beforemsg);
      }  
  }
}
