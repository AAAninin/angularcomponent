import { Injectable } from '@angular/core';
import { Subject } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class TogetherService {
  public twoeventBus:Subject<string> = new Subject<string>();

  public eventBus:Subject<string> = new Subject<string>();

  constructor() {
    
   }
  
}
