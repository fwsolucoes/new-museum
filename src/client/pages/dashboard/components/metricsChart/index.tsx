import { BarChart, type ChartData } from "~/client/components/barChart";
import { Container, Header } from "./styles";

const generateRandomNumbers = (
  count: number,
  min: number,
  max: number
): number[] => {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
};

function MetricsChart() {
  const labels = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago"];
  const NUMBER_CFG = { count: labels.length, min: 0, max: 100 };

  const data: ChartData = {
    labels: labels,
    datasets: [
      {
        label: "Receitas",
        borderColor: "transparent",
        backgroundColor: "#577177",
        borderRadius: 8,
        barThickness: 35,
        categoryPercentage: 0.8,
        barPercentage: 1.0,
        data: generateRandomNumbers(
          NUMBER_CFG.count,
          NUMBER_CFG.min,
          NUMBER_CFG.max
        ),
      },
      {
        label: "Despesas",
        borderColor: "transparent",
        backgroundColor: "#A4B8BC",
        borderRadius: 8,
        barThickness: 35,
        categoryPercentage: 0.8,
        barPercentage: 1.0,
        data: generateRandomNumbers(
          NUMBER_CFG.count,
          NUMBER_CFG.min,
          NUMBER_CFG.max
        ),
      },
    ],
  };

  return (
    <Container>
      <Header>Receitas</Header>
      <BarChart data={data} />
    </Container>
  );
}

export { MetricsChart };
