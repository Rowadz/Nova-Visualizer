import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { PieService } from '../../services/pie/pie.service';
require('highcharts/modules/item-series')(Highcharts);

@Component({
  selector: 'app-parliament',
  templateUrl: './parliament.component.html',
  styleUrls: ['./parliament.component.scss'],
  providers: [PieService]
})
export class ParliamentComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  constructor(private readonly pieService: PieService) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.pieService.init('item');
  }
}
