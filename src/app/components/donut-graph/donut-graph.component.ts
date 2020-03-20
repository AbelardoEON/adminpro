import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-donut-graph',
  templateUrl: './donut-graph.component.html',
  styles: []
})
export class DonutGraphComponent implements OnInit {
  @Input() public doughnutChartLabels: Label[] = [];
  @Input() public doughnutChartData: MultiDataSet = [];
  @Input() public doughnutChartType: ChartType = 'doughnut';
  constructor() { }

  ngOnInit() {
  }

 
}
