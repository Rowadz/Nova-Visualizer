import { Component, OnInit } from '@angular/core';
import { PieService } from '../../services/pie/pie.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
  providers: [PieService]
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
  chartConstructor = 'chart';
  chartOptions: Highcharts.Options;
  constructor(private readonly pieService: PieService) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.pieService.init();
  }
}
