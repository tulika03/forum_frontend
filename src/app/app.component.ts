import { AppService } from './app.service';
import { MainService } from './nav/main/main.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forums-app';
  visible : boolean
  constructor( public nav : AppService) {}
}
