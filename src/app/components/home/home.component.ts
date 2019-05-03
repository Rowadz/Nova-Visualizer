import { Component, OnInit } from '@angular/core';
import { NotifierService, dbNames } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private readonly notifierService: NotifierService) {}

  ngOnInit(): void {}

  db(db: dbNames): void {
    localStorage.setItem('db', db);
    this.notifierService.selectedDB = db;
  }
}
