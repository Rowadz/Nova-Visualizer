import { Component, OnInit } from '@angular/core';
import { speedDialFabAnimations } from './action-button.animation';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
  animations: speedDialFabAnimations
})
export class ActionButtonComponent implements OnInit {
  fabButtons: Array<FloatingButtons>;
  buttons: Array<FloatingButtons>;
  fabTogglerState = 'inactive';
  constructor() {
    this.fabButtons = [
      { icon: 'edit', route: '', color: 'warn' },
      { icon: 'school', route: 'tree', color: 'primary' },
      { icon: 'pie_chart', route: 'pie', color: 'primary' }
    ];
    this.buttons = [];
  }

  ngOnInit(): void {}

  showItems(): void {
    this.fabTogglerState = 'active';
    this.buttons = this.fabButtons;
  }

  hideItems(): void {
    this.fabTogglerState = 'inactive';
    this.buttons = [];
  }

  onToggleFab(): void {
    this.buttons.length ? this.hideItems() : this.showItems();
  }
}

interface FloatingButtons {
  icon: string;
  route: string;
  color: 'warn' | 'primary' | 'accent';
}