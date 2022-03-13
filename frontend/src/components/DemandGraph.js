import { ApexOptions } from "apexcharts";
import React from "react";
import Chart from "react-apexcharts";

export default function DemandGraph({ data }) {
  const myData = JSON.parse(JSON.stringify(data));
  const CharData = myData.data;
  const series = CharData.map((val) => {
    return val.value;
  });
  const categoris = CharData.map((val) => {
    return val.key;
  });
  const categoriesList = [
    categoris[0],
    categoris[29],
    categoris[59],
    categoris.slice(-1),
  ];

  const options: ApexOptions = {
    series: [
      {
        name: "Jobs",
        data: series,
      },
    ],
    chart: {
      height: "500px",
      stacked: false,
      foreColor: "#373d3f",
      toolbar: {
        show: true,
        tools: {
          download: false,
          zoomin: true,
          zoomout: true,
          selection: false,
          pan: false,
          zoom: false,
          reset: false,
        },
      },
    },
    colors: ["#03bafc"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
      },
    },

    xaxis: {
      categories: categoris,
      tickPlacement: "on",
      overwriteCategories: categoriesList,
    },
    yaxis: {
      opposite: true,
      labels: {
        formatter: function (val) {
          return val.toFixed(0);
        },
      },
    },
  };

  return (
    <Chart
      options={options}
      series={options.series}
      type="bar"
      height="250"
      width="100%"
    />
  );
}
