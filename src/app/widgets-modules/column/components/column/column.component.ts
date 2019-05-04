import { Component, OnInit } from '@angular/core';
import { ColumnService } from '../../services/column.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
  providers: [ColumnService]
})
export class ColumnComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  constructor(private readonly columnService: ColumnService) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.columnService.init();
  }
}
