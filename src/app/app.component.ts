import { Component, OnInit } from '@angular/core';
import { RouterConf } from './config/models/router-conf.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mainLinks: Array<RouterConf>;

  ngOnInit(): void {
    this.mainLinks = [
      {
        name: 'الخطة الشجرية',
        routerLink: 'tree',
        routerLinkActive: 'active',
        icon: 'school'
      }
    ];
  }
}
