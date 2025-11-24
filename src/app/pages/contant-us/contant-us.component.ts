import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Map, Marker } from 'maplibre-gl';
@Component({
  selector: 'app-contant-us',
  imports: [],
  templateUrl: './contant-us.component.html',
  styleUrl: './contant-us.component.scss'
})
export class ContantUsComponent  implements AfterViewInit{
  


   constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const map = new Map({
      container: 'map',
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=eFCBIyblUyKKK3LEyAhC`,
      center: [50.5860, 26.2285], // المنامة – البحرين
      zoom: 12
    });

    new Marker({ color: '#d92c2c' })
      .setLngLat([50.5860, 26.2285])
      .addTo(map);
  }
  

}
