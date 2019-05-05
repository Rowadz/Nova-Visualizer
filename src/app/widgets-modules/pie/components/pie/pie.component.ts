import { Component, OnInit } from '@angular/core';
import { PieService } from '../../services/pie/pie.service';
import * as Highcharts from 'highcharts';
import { FilterType } from 'src/app/config/models/filter-types.type';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss'],
  providers: [PieService]
})
export class PieComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  ratingOption: boolean;
  constructor(private readonly pieService: PieService) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.pieService.init('pie', 'nothing');
  }

  async changeFilter(e: FilterType): Promise<void> {
    this.ratingOption = e === 'rating';
    this.chartOptions = undefined;
    const options = JSON.stringify(await this.pieService.init('pie', e));
    this.chartOptions = JSON.parse(options);
  }
}
