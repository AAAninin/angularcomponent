import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BotherService {
  m :any;
  constructor() { }
  sendmessageto(msg:string){
    this.m = msg;
    return this.m;
  }
}
