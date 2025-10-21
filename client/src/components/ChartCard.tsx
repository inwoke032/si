import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  TooltipItem,
  DoughnutController 
} from 'chart.js';
import { timeAllocationData } from "@/lib/calendar-data";

ChartJS.register(ArcElement, Tooltip, Legend, DoughnutController);

export function ChartCard() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    chartInstance.current = new ChartJS(ctx, {
      type: 'doughnut',
      data: timeAllocationData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '60%',
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              padding: 15,
              font: {
                size: 12,
                family: 'Inter, sans-serif'
              },
              color: getComputedStyle(document.documentElement).getPropertyValue('--foreground').trim()
            }
          },
          tooltip: {
            callbacks: {
              label: (context: TooltipItem<'doughnut'>) => `${context.label}: ${context.parsed} hrs`
            }
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <Card className="hover-elevate">
      <CardContent className="p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
          Distribución del Tiempo Semanal
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Este gráfico visualiza cómo se distribuyen tus horas cada semana entre las áreas 
          clave de tu preparación.
        </p>
        <div className="relative w-full max-w-md mx-auto" style={{ height: '300px' }}>
          <canvas ref={chartRef} data-testid="chart-time-allocation"></canvas>
        </div>
      </CardContent>
    </Card>
  );
}
