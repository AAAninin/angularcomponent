import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BotherService } from '../bother.service';

@Component({
  selector: 'app-childthree',
  templateUrl: './childthree.component.html',
  styleUrls: ['./childthree.component.css']
})
export class ChildthreeComponent implements OnInit {
  bothermsg:any;
  @Input() childDataName:string ;
  @Output() message = new EventEmitter();
  constructor(private bother:BotherService) { }

  ngOnInit() {
    this.childDataName = "还没收到消息";
  }
  send(){
    this.bothermsg = this.bother.sendmessageto("组件三发出的信息");
    console.log(this.bothermsg);
  }
  seenbother(){
    console.log(this.bother.m);
  }
  sendmessage(){
    this.childDataName = "组件三发送的消息";
    this.message.emit(this.childDataName);
  }
}
