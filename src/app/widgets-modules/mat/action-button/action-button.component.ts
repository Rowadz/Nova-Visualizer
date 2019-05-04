import { Component, OnInit } from '@angular/core';
import { speedDialFabAnimations } from './action-button.animation';
import { NotifierService } from 'src/app/services/notifier.service';

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

  constructor(public readonly notifierService: NotifierService) {
    this.fabButtons = [
      { icon: 'edit', route: '', color: 'accent' },
      { icon: 'school', route: 'tree', color: 'primary' },
      { icon: 'pie_chart', route: 'pie', color: 'primary' },
      { icon: 'translate', route: 'wordcloud', color: 'primary' },
      { icon: 'signal_cellular_alt', route: 'column', color: 'primary' },
      { icon: 'scatter_plot', route: 'packed-bubble', color: 'primary' }
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
