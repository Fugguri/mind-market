import React from "react";
import Chart, { Props } from "react-apexcharts";

const state: Props["series"] = [
  {
    name: "Series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "Series2",
    data: [11, 32, 45, 32, 34, 52, 41],
  },
];

const options: Props["options"] = {


  chart: {
    type: "line",
    animations: {
      easing: "linear",
      speed: 300,
    },
    sparkline: {
      enabled: false,
    },
    brush: {
      enabled: false,
    },
    id: "basic-bar",
    foreColor: "hsl(var(--nextui-default-800))",
    stacked: true,
    toolbar: {
      show: false,
    },
  },

  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    labels: {
      // show: false,
      style: {
        colors: "hsl(var(--nextui-default-800))",
      },
    },
    axisBorder: {
      color: "hsl(var(--nextui-nextui-default-200))",
    },
    axisTicks: {
      color: "hsl(var(--nextui-nextui-default-200))",
    },
  },
  yaxis: {
    labels: {
      style: {
        // hsl(var(--nextui-content1-foreground))
        colors: "hsl(var(--nextui-default-800))",
      },
    },
  },
  tooltip: {
    enabled: false,
  },

  grid: {
    show: true,
    borderColor: "hsl(var(--nextui-default-200))",
    strokeDashArray: 0,
    position: "back",
  },
  stroke: {
    curve: "straight",
  },
  markers: {
    size: 0,
    colors: undefined,
    strokeColors: '#fff',
    strokeWidth: 2,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    onClick: undefined,
    onDblClick: undefined,
    showNullDataPoints: true,
    hover: {
      size: undefined,
      sizeOffset: 3
    }
  },
};

export const Graph = () => {
  return (
    <>
      <div className="w-full z-20" style={{width: "100%"}}>
        <div id="chart">
          <Chart options={options} series={state} type="area" height={320}/>
        </div>
      </div>
    </>
  );
};

