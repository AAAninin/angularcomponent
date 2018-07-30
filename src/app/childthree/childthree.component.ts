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
    
  }
  send(){
    this.bother.m.data = "你好，我是组件3";
    this.bother.m.change = true;
  }
  sendmessage(){
    this.childDataName.data = "你好，我是组件3";
    this.childDataName.change = true;
    this.message.emit(this.childDataName);
  }
}
