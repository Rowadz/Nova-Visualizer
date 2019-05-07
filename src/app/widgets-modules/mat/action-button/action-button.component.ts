import { Component, OnInit, Input } from '@angular/core';
import { speedDialFabAnimations } from './action-button.animation';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
  animations: speedDialFabAnimations
})
export class ActionButtonComponent implements OnInit {
  @Input() sty: object;
  @Input() type: 'navigate1' | 'navigate2' = 'navigate1';

  fabButtons: Array<FloatingButtons>;
  buttons: Array<FloatingButtons>;
  fabTogglerState = 'inactive';

  constructor(public readonly notifierService: NotifierService) {
    this.buttons = [];
  }

  ngOnInit(): void {
    if (this.type === 'navigate1') {
      this.fabButtons = [
        { icon: 'edit', route: '', color: 'accent' },
        { icon: 'school', route: 'tree', color: 'primary' },
        { icon: 'pie_chart', route: 'pie', color: 'primary' },
        { icon: 'translate', route: 'wordcloud', color: 'primary' },
        { icon: 'signal_cellular_alt', route: 'column', color: 'primary' },
        { icon: 'scatter_plot', route: 'packed-bubble', color: 'primary' },
        { icon: 'highlight', route: 'calc', color: 'primary' }
      ];
    } else {
      this.fabButtons = [{ icon: 'edit', route: '', color: 'accent' }];
    }
  }

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
