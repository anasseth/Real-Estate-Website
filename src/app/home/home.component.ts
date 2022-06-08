import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DomSanitizer } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isShowLargeMap:boolean=false;
  zoom: number = 15;
  lat: number = 23.728842962746764;
  lng: number = 120.49316267859408;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    center: true,
    autoHeight: true,
    navSpeed: 600,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      760: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  mapClicked($event: any) {
    var event = $event as MouseEvent;
    console.log("Lat : ", event.coords.lat)
    console.log("Long : ", event.coords.lng)
    this.isShowLargeMap = !this.isShowLargeMap
  }

}
