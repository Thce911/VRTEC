import { Component } from '@angular/core';
import {spaces} from './spaces'
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  spaces = spaces;

  title = 'WEBVR';

  config: SwiperOptions = {
    pagination: { el: '.swiper-pagination', clickable: true },
    effect: "coverflow",
    slidesPerView: 5,
    centeredSlides: true,
    allowTouchMove: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
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
        spaceBetween: 40
      }
    }
  };
}
