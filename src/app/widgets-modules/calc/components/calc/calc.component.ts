import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DBService } from 'src/app/services/db.service';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';
import { NotifierService } from 'src/app/services/notifier.service';
import { CalcService } from '../../services/calc/calc.service';
import { Marks } from 'src/app/config/models/marks.interface';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
  providers: [CalcService]
})
export class CalcComponent implements OnInit, AfterViewInit {
  finalRes: Marks;
  displayedColumns: string[] = ['name', 'mark', 'credit'];
  dataSource: MatTableDataSource<TreeSubejct>;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private readonly DB: DBService,
    private readonly notifier: NotifierService,
    private readonly calcService: CalcService
  ) {}

  async ngOnInit() {}

  async ngAfterViewInit(): Promise<void> {
    this.DB.dbName = this.notifier.selectedDB;
    this.finalRes = this.calcService.mappSavedDataWithItsCridedForSafity(
      await this.DB.getAll()
    );
    console.log(this.sort);
    setTimeout(() => {
      this.dataSource = new MatTableDataSource(this.finalRes.marks);
      this.dataSource.sort = this.sort;
    }, 1);
    // this.dataSource.sort.sortChange.subscribe(d => {
    //   console.log(d);
    // });
  }
}
