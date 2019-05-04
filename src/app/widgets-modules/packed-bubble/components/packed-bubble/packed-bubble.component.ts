import { Component, OnInit } from '@angular/core';
import { PackedBubbleService } from '../../services/packed-bubble.service';
import * as Highcharts from 'highcharts';
require('highcharts/highcharts-more')(Highcharts);

@Component({
  selector: 'app-packed-bubble',
  templateUrl: './packed-bubble.component.html',
  styleUrls: ['./packed-bubble.component.scss'],
  providers: [PackedBubbleService]
})
export class PackedBubbleComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options;
  constructor(private readonly packedBubbleService: PackedBubbleService) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.packedBubbleService.init();
  }
}
