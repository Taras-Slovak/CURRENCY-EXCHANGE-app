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
        label: 'USD',
        backgroundColor: 'blue',
        borderColor: 'blue',
        data: [0, 3],
      },
      {
        label: 'EUR',
        backgroundColor: 'gree',
        borderColor: 'green',
        data: [0, 2, 4, 6, 8, 10, 12],
      },
      ]
    };
    const config: any = {
      type: 'line',
      data: data,
      options: {}
    };

    const myChart = new Chart('myChart', config);
  }

}
