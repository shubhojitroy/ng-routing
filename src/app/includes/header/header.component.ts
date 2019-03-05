import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  pageTitle = 'Angular Routing';
  constructor() { }

  ngOnInit() {
  }

}
