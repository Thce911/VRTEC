import { Component, OnInit, NgModule } from '@angular/core';
import {MaterialModule} from '../material.module' 

@NgModule({
  declarations: [
    
  ],
  imports:[
    MaterialModule
  ],
  providers:[],
  bootstrap:[TopBarComponent]
})


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
