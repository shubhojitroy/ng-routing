import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nr-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss']
})
export class PrivacyPolicyComponent implements OnInit {

  pageTitle = 'Privacy policy';
  constructor() { }

  ngOnInit() {
  }

}
