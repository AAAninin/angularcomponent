import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TogetherService {
  m : any;
  constructor() { }
  sendmsg(msg : any){
    this.m = msg;
    return this.m;
  }
}
