import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  constructor() { }
  // barChartData: ChartDataSets[] = [
  //   { data: [ 29.6, 24.8, 24.8, 20.8 ], label: 'Estudiantes' }
  //   // { data: [24.8], label: 'Es menos placentero' },
  //   // { data: [24.8], label: 'Miedo a los efectos secundarios' },
  //   // { data: [20.8], label: 'Se le olvida tomarlo o usarlo' }
  // ];

  // barChartOptions: ChartOptions = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: { xAxes: [{}], yAxes: [{}] },
  //   plugins: {
  //     datalabels: {
  //       anchor: 'end',
  //       align: 'end',
  //     }
  //   }
  // };
  // barChartPlugins = [pluginDataLabels];

  // graficosBae: any = {
  //   grafico1: {
  //     labels: ['Su religión la prohibe', 'Es menos placentero', 'Miedo a los efectos secundarios', 'Se le olvida tomarlo o usarlo'],
  //     data: [ 29.6, 24.8, 24.8, 20.8 ],
  //     leyenda: 'Gráfica 1 Causas del no uso'
  //   },
  //   grafico2: {
  //     labels: ['Infección de transmisión sexual', 'Embarazo no deseado' , 'Embarazo e Infección de transmisión sexual' ],
  //       data: [ 18, 21, 61],
  //       leyenda: 'Gráfica 6 Consecuencias de las prácticas sexuales de riesgo'
  //   }
  // };

  ngOnInit() {
  }
}
