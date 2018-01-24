import { Component, OnInit } from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  nbbatiments;
  nbchambres;
  nbreserves;
  nbconfirmes;
  nbEtudiants;
  batiments;
  pieOptions;
  columnOptions;

  options = [];

  constructor(private dataService:DataService) {

  }

  ngOnInit() {
    this.dataService.get("Batiments/count")
      .subscribe(
        data=>{
          this.nbbatiments = data.count;
    }
      );

    this.dataService.get("Chambres/count")
      .subscribe(
        data=>{
          this.nbchambres = data.count;
        }
      );
    this.dataService.get("Etudiants/count")
      .subscribe(
        data=>{
          this.nbEtudiants = data.count;
        }
      );

    this.dataService.get('Batiments?filter=' + encodeURIComponent('{"order":"etages.numero","include": {"etages": "chambres"}}'))
      .subscribe(
        data=>{
          this.batiments = data;
          this.batiments.charts = [];
          let batimentCharts=[];
          this.batiments.forEach(function (batiment) {
            batiment.nbchambres = 0;
            batiment.etagesCharts = [];
            batiment.etages.forEach(function (etage) {
              batiment.etagesCharts.push(etage.chambres.length)
              batiment.nbchambres += etage.chambres.length;
            })
            batimentCharts.push({name: batiment.label, y: batiment.nbchambres});
          });
          this.batiments.charts = batimentCharts;
          this.handleCharts(0);
          this.handlePieChart();
        }
      );
  }

  handlePieChart()
  {
    this.pieOptions = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      title: {
        text: 'Diagramme circulaire du nombre de chambre par batiment'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },
      series: [{
        name: 'Nombre de chambres',
        colorByPoint: true,
        data: this.batiments.charts
      }]
    }
    this.columnOptions = {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 21,
          beta: -20
        }
      },
      title: {
        text: 'Histogramme du nombre de chambre par batiment'
      },
      subtitle: {
        text: 'Les données sont recues en temps réel'
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: 'Nombre de chambre par batiment'
        }

      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 100,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },

      tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
      },

      series: [{
        name: 'Nombre de chambres',
        colorByPoint: true,
        data: this.batiments.charts
      }]
    }
  }

  handleCharts(debut)
  {
    if(debut==this.batiments.length-1)
    {
      this.batiments[debut].options = {

        title: {
          text: this.batiments[debut].label
        },

        xAxis: {
          tickInterval: 1,
          title: {
            text: 'Etages'
          }
        },

        yAxis: {
          type: 'logarithmic',
          minorTickInterval: 0.1,
          title: {
            text: 'Nombre de chambres'
          }
        },

        tooltip: {
          headerFormat: '<b>Etages</b><br/>',
          pointFormat: 'x = {point.x}, y = {point.y}'
        },

        series: [{
          data: this.batiments[debut].etagesCharts,
          pointStart: 1
        }]
      };
    }
    else
    {
      this.batiments[debut].options = {

        title: {
          text: this.batiments[debut].label
        },

        xAxis: {
          tickInterval: 1,
          title: {
            text: 'Etages'
          }
        },

        yAxis: {
          type: 'logarithmic',
          minorTickInterval: 0.1,
          title: {
            text: 'Nombre de chambres'
          }
        },

        tooltip: {
          headerFormat: '<b>{series.name}</b><br />',
          pointFormat: 'x = {point.x}, y = {point.y}'
        },

        series: [{
          data: this.batiments[debut].etagesCharts,
          pointStart: 1
        }]
      };
      this.handleCharts(debut + 1)
    }
  }

}
