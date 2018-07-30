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
  beforemsg:any;
  constructor(private together:TogetherService) { }

  ngOnInit() {
  }
  getData(){
    console.log("子组件的方法");
  }
  changemsg(){
    console.log(this.together.sendmsg("我是组件二"));
  }
  see(){
    if(this.beforemsg != this.together.m){
      this.beforemsg = this.together.m;
      alert(this.beforemsg)
      }
  }

}
