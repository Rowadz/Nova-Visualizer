import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { PieService } from '../../services/pie/pie.service';
require('highcharts/modules/item-series')(Highcharts);
require('highcharts/highcharts-3d')(Highcharts);

@Component({
  selector: 'app-pie3-d',
  templateUrl: './pie3-d.component.html',
  styleUrls: ['./pie3-d.component.scss'],
  providers: [PieService]
})
export class Pie3DComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  constructor(private readonly pieService: PieService) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.pieService.init('3d');
  }
}
