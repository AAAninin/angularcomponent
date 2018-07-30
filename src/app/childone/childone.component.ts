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
    this.sendtwomsg = {
      data:"",
      change : false
    }
    this.sendbothermsg = {
      data:"",
      change : false
    }
  }

  ngOnInit() {
    // if(this.childDataName.change){
    //   alert("收到消息，消息为"+this.childDataName.data);
    //   this.childDataName.change = false;
    // }
    console.log(this.childtwo.data);
  }
  sendmessage(){
   this.childDataName.data = "你好,我是组件1";
   this.childDataName.change = true;
   this.message.emit(this.childDataName);
  //  this.childDataName.change = false;
  }
  change(){
    this.bother.t.data = "你好,我是组件1"
    this.bother.t.change = true;
  }
  send(){
    this.together.t.data = "你好,我是组件1"
    this.together.t.change = true;
  }
}
