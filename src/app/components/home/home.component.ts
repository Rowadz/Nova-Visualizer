import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewThingsComponent } from './new-things/new-things.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myStyle = {};
  myParams: any;

  constructor(private readonly dialog: MatDialog) {}

  ngOnInit(): void {
    this.setAttr();
    this.setStyle();
  }

  openDialog(): void {
    this.dialog.open(NewThingsComponent, {
      width: '400px'
    });
  }

  private setStyle(): void {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };
  }

  private setAttr(): void {
    this.myParams = {
      particles: {
        number: {
          value: 100
        },
        color: {
          value: '#000'
        },
        shape: {
          type: 'circle'
        },
        line_linked: {
          enable: true,
          distance: 300,
          color: '#000',
          opacity: 1
        }
      }
    };
  }
}
