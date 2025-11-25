import { Component } from '@angular/core';
import { DividerModule } from 'primeng/divider';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-home',
  imports: [CarouselModule, DividerModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {






customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,

    responsive: {
      0: {       // 📱 موبايل
        items: 1
      },
      576: {     // موبايل كبير
        items: 1
      },
      768: {     // 🧩 تابلت
        items: 1
      },
      992: {     // 💻 لابتوب
        items: 1
      }
    }
  };




  
}
