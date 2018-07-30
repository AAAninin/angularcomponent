import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BotherService } from '../bother.service';

@Component({
  selector: 'app-childthree',
  templateUrl: './childthree.component.html',
  styleUrls: ['./childthree.component.css']
})
export class ChildthreeComponent implements OnInit {
  beforemsg:any;
  @Input() childDataName:string ;
  @Output() message = new EventEmitter();
  constructor(private bother:BotherService) { }

  ngOnInit() {
    this.childDataName = "还没收到消息";
  }
  send(){
    console.log(this.bother.sendmessageto("组件三发出的信息"));
  }
  seenbother(){
    // console.log(this.bother.m);
    if(this.beforemsg != this.bother.m){
    this.beforemsg = this.bother.m;
    alert(this.beforemsg)
    }
  }
  sendmessage(){
    this.childDataName = "组件三发送的消息";
    this.message.emit(this.childDataName);
  }
}
