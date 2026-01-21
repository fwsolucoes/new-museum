import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
  type ChartData as ChartJsData,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

type ChartData = ChartJsData<"bar", number[], string>;

type BarChartProps = {
  data: ChartData;
};

function BarChart({ data }: BarChartProps) {
  ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement
  );

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      x: {
        stacked: false,
        grid: { display: false },
      },
      y: {
        stacked: false,
      },
    },
    plugins: {
      legend: {
        position: "top",
        align: "end",
        labels: {
          font: {
            size: 14,
            lineHeight: 20,
            weight: 400,
            family: `"Open Sans", sans-serif`,
          },
          color: "var(--text-body)",
          boxWidth: 8,
          boxHeight: 8,
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div style={{ position: "relative", height: "min-content", width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export { BarChart, type ChartData };
