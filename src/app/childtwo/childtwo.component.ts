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
  msg :any;
  constructor(private together:TogetherService) { }

  ngOnInit() {
  }
  getData(){
    console.log("子组件的方法");
  }
  changemsg(){
    this.msg = this.together.sendmsg("我是组件二");
    console.log(this.msg);
  }
  see(){
    console.log(this.together.m);
  }

}
