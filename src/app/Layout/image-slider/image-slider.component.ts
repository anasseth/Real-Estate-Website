import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Lightbox } from 'ngx-lightbox';
import { LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  _album: any = [
    {
      src: "../../assets/images/c1d582de-2b6f-4e6a-93e4-46ffd108de06----1.jpg",
      caption: "",
      thumb: "../../assets/images/thumbnail.jpg"
    },
    {
      src: "../../assets/images/oakImage-1583946227866-mediumSquareAt3X.jpg",
      caption: "",
      thumb: "../../assets/images/thumbnail.jpg"
    },
    {
      src: "../../assets/images/e9bfc8e9-a6a9-4ab8-bb22-ac34b4f44aed.jpg",
      caption: "",
      thumb: "../../assets/images/thumbnail.jpg"
    },
    {
      src: "../../assets/images/oakImage-1583946227866-mediumSquareAt3X.jpg",
      caption: "",
      thumb: "../../assets/images/thumbnail.jpg"
    },
    {
      src: "../../assets/images/c1d582de-2b6f-4e6a-93e4-46ffd108de06----1.jpg",
      caption: "",
      thumb: "../../assets/images/thumbnail.jpg"
    },
  ];
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
  constructor(private _lightbox: Lightbox, public _lightBoxConfiguration: LightboxConfig) {
    this._lightBoxConfiguration.albumLabel = "Photo Gallery";
    this._lightBoxConfiguration.alwaysShowNavOnTouchDevices = true;
    this._lightBoxConfiguration.centerVertically = true;
    this._lightBoxConfiguration.disableScrolling = true;
    this._lightBoxConfiguration.enableTransition = true;
    this._lightBoxConfiguration.fadeDuration = 0.2;
    this._lightBoxConfiguration.showZoom = true;
    this._lightBoxConfiguration.showDownloadButton = true;
    this._lightBoxConfiguration.showRotate = true;
    this._lightBoxConfiguration.wrapAround = true;
  }

  ngOnInit(): void {
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
