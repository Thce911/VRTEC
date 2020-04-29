import {NgModule} from '@angular/core';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';

const SwiperComponents  = [
    NgxUsefulSwiperModule,
];

 
@NgModule({
  imports: [
    SwiperComponents
  ], 
  exports:[
    SwiperComponents
  ]
})

export class SwModule { }