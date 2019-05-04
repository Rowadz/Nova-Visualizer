import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'main-subjets-card',
  templateUrl: './main-subjets-card.component.html',
  styleUrls: ['./main-subjets-card.component.scss']
})
export class MainSubjetsCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
