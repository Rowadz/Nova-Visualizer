import { SeriesClickEventObject } from 'highcharts';
import { TreeSubejct } from 'src/app/config/models/tree-subject.model';

const org = ({ data, nodes, editPoint }: any): Highcharts.Options => ({
  chart: {
    inverted: true
  },
  title: {
    text: ''
  },
  plotOptions: {
    organization: {
      events: {
        click: (e: SeriesClickEventObject) =>
          editPoint.emit(e.point.options as TreeSubejct)
      },
      states: {
        hover: {
          color: '#000000'
        }
      },
      cursor: 'pointer'
    }
  },
  series: [
    {
      type: 'organization',
      name: '',
      keys: ['from', 'to'],
      data: data.sort((a, b) => +a[0] - +b[0]),
      nodes,
      colorByPoint: false,
      //   color: '#A63E26',
      dataLabels: {
        color: '#D8E6F2',
        opacity: 0.5
      },
      nodeWidth: 40
    }
  ] as any,
  tooltip: {
    formatter() {
      const { title, mark, credit, id } = this.point;
      return `<b>${title}</b><br/>MARK: <b> 
      ${mark || '?'}</b><br/> credit <b>${credit}</b>`;
    },
    outside: true
  },
  exporting: {
    allowHTML: true,
    sourceWidth: 800,
    sourceHeight: 600
  }
});

export default org;
