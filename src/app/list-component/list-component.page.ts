import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.page.html',
  styleUrls: ['./list-component.page.scss'],
})
export class ListComponentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  slideOpts = {
    initiaSlide: 0,
    speed: 400
  }

  slides = new Array(4);

}
