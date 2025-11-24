import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { setRTLTextPlugin } from 'maplibre-gl';


setRTLTextPlugin(
  'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
  true
);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
