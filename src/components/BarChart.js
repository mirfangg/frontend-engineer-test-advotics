import React from "react";
import { Bar, defaults } from "react-chartjs-2";

defaults.global.legend.position = "bottom";
defaults.global.legend.align = "center";

function BarChart() {
  return (
    <div className="bar__chart">
      <Bar
        data={{
          labels: ["Jan 12", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Nett",
              barPercentage: 0.8,
              data: [26, 23, 20, 21, 22, 23, 24],
              backgroundColor: "#37B04C",
            },
            {
              label: "Gross",
              barPercentage: 0.8,
              data: [26, 23, 20, 21, 22, 23, 24],
              backgroundColor: "#289E45",
            },
            {
              label: "Average Purchase Value",
              barPercentage: 0.8,
              data: [26, 23, 20, 21, 22, 23, 24],
              backgroundColor: "#7AE28C",
            },
            {
              label: "Unit per Transaction",
              barPercentage: 0.8,
              data: [26, 23, 20, 21, 22, 23, 24],
              backgroundColor: "#707070",
            },
          ],
        }}
        height={210}
        width={310}
        options={{
          maintainAspectRatio: true,
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default BarChart;
