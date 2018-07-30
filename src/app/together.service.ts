import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TogetherService {
  m : {
    data:any,
    change:boolean
  };
  t : {
    data:any,
    change:boolean
  };
  constructor() {
    this.m ={
      data:"",
      change:false
    }
    this.t ={
      data:"",
      change:false
    }
   }
  
}
