import { Injectable } from '@angular/core';
import { Subject } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class BotherService {
  public twoeventBus:Subject<string> = new Subject<string>();

  public eventBus:Subject<string> = new Subject<string>();

  constructor() {
    
   }
}
