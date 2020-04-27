import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
 
const MaterialComponents =[
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
];


@NgModule({
    imports:[
        MaterialComponents  
    ],
    exports:[
        MaterialComponents
    ]
})




export class MaterialModule { }
