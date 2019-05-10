import { Component, OnInit } from '@angular/core';
import { PackedBubbleService } from '../../services/packed-bubble.service';
import * as Highcharts from 'highcharts';
import { MatBottomSheet } from '@angular/material';
import { NotifierService, ReDrawConf } from 'src/app/services/notifier.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { CrudMarksComponent } from 'src/app/widgets-modules/mat/crud-marks/crud-marks.component';
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
  constructor(
    private readonly packedBubbleService: PackedBubbleService,
    private readonly bottomSheet: MatBottomSheet,
    private readonly notifierService: NotifierService
  ) {}

  async ngOnInit(): Promise<void> {
    this.chartOptions = await this.packedBubbleService.init();
    this.packedBubbleService.editPoint.subscribe((ts: TreeSubejct) => {
      this.bottomSheet.open(CrudMarksComponent, { data: ts });
    });
    this.notifierService.reDrawGraph.subscribe((c: ReDrawConf) => {
      this.redraw();
    });
  }

  private async redraw(): Promise<void> {
    const { packedbubble } = this.chartOptions.plotOptions;
    this.chartOptions = undefined;
    const options = JSON.stringify(await this.packedBubbleService.init());
    this.chartOptions = {
      ...JSON.parse(options),
      plotOptions: {
        packedbubble: {
          ...packedbubble
        }
      }
    };
  }
}
