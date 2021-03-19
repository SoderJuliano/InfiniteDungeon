import React, { Component } from "react";
import ApexCharts from 'apexcharts';
import Chart from "react-apexcharts";

class App extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
            title: {
                text: 'WARRIOR'
              },
          chart: {
            id: "basic-bar"
          },
          xaxis: {
            categories: ['Attack', 'Defence', 'Life', "Intelect", 'Energia', 'Armor'],
            labels: {
            style: {
              colors: ["#0000CD", "#0000CD", "#0000CD", "#0000CD", "#0000CD", "#0000CD"],
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label'
          },},
          }
        },
        series: [
          {
            name: "Points",
            data: [7, 7, 9, 2, 5, 10]
          }
        ]
      };
    }
  
    render() {
      return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={this.state.options}
                series={this.state.series}
                type="radar"
                width="240"
                height="290"
              />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export {App};
  