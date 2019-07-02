import {Injectable } from  '@angular/core'
import { BehaviorSubject } from 'rxjs';

@Injectable() 
export class AppService {
  private  visible  = false

    constructor() {
        this.visible = true;

    }

    hide() {
        this.visible = false;
    }

    show() {
      return  this.visible = true;
    }

    toggle() {
        this.visible = !this.visible
    }
}