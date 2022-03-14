import React from "react";
import Chart from "react-apexcharts";

export default function SingleRadarPlot({ data }) {
  // console.log(data);
  const options: ApexOptions = {
    series: data.series,

    chart: {
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

      title: {
        text: "Basic Radar Chart",
      },
    },
    xaxis: {
      categories: data.categories,
      tickPlacement: "on",
      labels: {
        show: true,
        style: {
          colors: data.colors,
          fontSize: "11px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      show: false,
      min: 0,
      max: 100 * data.max,
    },
    fill: {
      opacity: 0.3,
      // type: "solid",
      // colors: data.fillColors,
    },
    markers: {
      //size: 4,
      //colors: data.fillColors,
    },
  };
  return (
    <Chart
      options={options}
      series={options.series}
      type="radar"
      height={600}
      width="100%"
    />
  );
}
