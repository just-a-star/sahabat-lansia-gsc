// GrafikJantung.js
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);

const GrafikJantung = () => {
  // Data generation
  const dataPoints = 1000;
  let prev = 100;
  let prev2 = 80;
  const data = [];
  const data2 = [];
  for (let i = 0; i < dataPoints; i++) {
    prev += 5 - Math.random() * 10;
    data.push({ x: i, y: prev });
    prev2 += 5 - Math.random() * 10;
    data2.push({ x: i, y: prev2 });
  }

  // Animation configuration
  const totalDuration = 10000;
  const delayBetweenPoints = totalDuration / data.length;
  const animation = {
    x: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: NaN,
      delay: (ctx) => {
        if (ctx.type !== "data" || ctx.xStarted) {
          return 0;
        }
        ctx.xStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
    y: {
      type: "number",
      easing: "linear",
      duration: delayBetweenPoints,
      from: (ctx) =>
        ctx.index === 0
          ? ctx.chart.scales.y.getPixelForValue(100)
          : ctx.chart
              .getDatasetMeta(ctx.datasetIndex)
              .data[ctx.index - 1].getProps(["y"], true).y,
      delay: (ctx) => {
        if (ctx.type !== "data" || ctx.yStarted) {
          return 0;
        }
        ctx.yStarted = true;
        return ctx.index * delayBetweenPoints;
      },
    },
  };

  // Chart configuration
  const config = {
    datasets: [
      {
        borderColor: "rgb(255, 99, 132)",
        borderWidth: 1,
        radius: 0,
        data: data,
      },
      {
        borderColor: "rgb(54, 162, 235)",
        borderWidth: 1,
        radius: 0,
        data: data2,
      },
    ],
  };

  const options = {
    animation,
    interaction: {
      intersect: false,
    },
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        type: "linear",
      },
    },
  };

  return <Line data={config} options={options} />;
};

export default GrafikJantung;
