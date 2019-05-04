import { Component, OnInit } from '@angular/core';
import { WordcloudService } from '../../services/wordcloud.service';
import * as Highcharts from 'highcharts';
import wordCloudModule from 'highcharts/modules/wordcloud';
wordCloudModule(Highcharts);

@Component({
  selector: 'app-wordcloud',
  templateUrl: './wordcloud.component.html',
  styleUrls: ['./wordcloud.component.scss'],
  providers: [WordcloudService]
})
export class WordcloudComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  constructor(private readonly wordcloudService: WordcloudService) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.wordcloudService.init();
  }
}
