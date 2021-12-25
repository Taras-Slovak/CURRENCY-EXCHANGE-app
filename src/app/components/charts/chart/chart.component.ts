import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    const labels: any = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
    ];
    const data: any = {
      labels: labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
    const config: any = {
      type: 'line',
      data: data,
      options: {}
    };

    const myChart = new Chart('myChart', config);
  }

}
