import { Component, OnInit } from '@angular/core';
import {spaces} from '../spaces'
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  spaces = spaces;

  title = 'WEBVR';

  config: SwiperOptions = {
    effect: "coverflow",
    slidesPerView: 5,
    centeredSlides: true,
    allowTouchMove: true,
    centeredSlidesBounds: true,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
