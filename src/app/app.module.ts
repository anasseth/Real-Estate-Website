import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgImageSliderModule } from 'ng-image-slider';
import { ImageSliderComponent } from './Layout/image-slider/image-slider.component';
import { ItemCarouselComponent } from './Layout/item-carousel/item-carousel.component';
import { LightboxModule } from 'ngx-lightbox';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ImageSliderComponent,
    ItemCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgwWowModule,
    CarouselModule,
    AnimateOnScrollModule.forRoot(),
    NgImageSliderModule,
    LightboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmW0pz03WIpnH-HDUtU4i8ivLZJjGqcBQ',
      libraries: ['places']
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
