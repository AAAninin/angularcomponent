import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fatherData: string = "";
  sendmessage(){
    this.fatherData = "father send message";
  }
  message(i:string){
    this.fatherData = i;
  }
}
