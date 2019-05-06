import { FilterType } from 'src/app/config/models/filter-types.type';

export class ServicesHelper {
  constructor() {}

  mapDataToColorsFromFilter<T extends { color: string }>(
    filterType: FilterType,
    data: Array<T>,
    key: string
  ): Array<T> {
    return data.map((d: T) => {
      if (filterType === 'failSucc') {
        if (d[key] <= 49) {
          d.color = '#F6615F';
        } else if (d[key] >= 50) {
          d.color = '#60999B';
        }
      } else if (filterType === 'rating') {
        if (d[key] < 50) {
          d.color = '#0D0D0D';
        } else if (d[key] >= 50 && d[key] <= 59) {
          d.color = '#F26B5E';
        } else if (d[key] >= 60 && d[key] <= 69) {
          d.color = '#95D5D2';
        } else if (d[key] >= 70 && d[key] <= 79) {
          d.color = '#755671';
        } else if (d[key] >= 80 && d[key] <= 89) {
          d.color = '#0D00C4';
        } else {
          d.color = '#0DF205';
        }
      } else {
        delete d.color;
      }
      return d;
    });
  }
}
