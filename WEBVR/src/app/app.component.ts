import { Component } from '@angular/core';
import {spaces} from './spaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  spaces = spaces;
  title = 'WEBVR';
}
