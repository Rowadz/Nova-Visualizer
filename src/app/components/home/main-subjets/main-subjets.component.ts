import { Component, OnInit } from '@angular/core';
import { NotifierService, dbNames } from 'src/app/services/notifier.service';

@Component({
  selector: 'main-subjets',
  templateUrl: './main-subjets.component.html',
  styleUrls: ['./main-subjets.component.scss']
})
export class MainSubjetsComponent implements OnInit {
  constructor(private readonly notifierService: NotifierService) {}

  ngOnInit(): void {}

  db(db: dbNames): void {
    localStorage.setItem('db', db);
    this.notifierService.selectedDB = db;
  }
}
