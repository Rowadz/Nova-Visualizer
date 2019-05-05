import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterType } from 'src/app/config/models/filter-types.type';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() changeFilter: EventEmitter<FilterType>;
  constructor() {
    this.changeFilter = new EventEmitter<FilterType>();
  }

  ngOnInit(): void {}

  filterChange(f: FilterType): void {
    this.changeFilter.emit(f);
  }
}
