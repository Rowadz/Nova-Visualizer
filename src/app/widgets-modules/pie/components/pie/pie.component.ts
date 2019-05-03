import { Component, OnInit } from '@angular/core';
import { PieService } from '../../services/pie/pie.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
  providers: [PieService]
})
export class PieComponent implements OnInit {
  constructor(private readonly pieService: PieService) {}

  ngOnInit(): void {
    this.pieService.init();
  }
}
