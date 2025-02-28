import Card from "components/card";
import BarChart from "components/charts/BarChart";
import {
  barChartDataWeeklyRevenue,
  barChartOptionsWeeklyRevenue,
} from "variables/charts";
import { MdBarChart } from "react-icons/md";

const WeeklyRevenue = () => {
  return (
    <Card extra="flex flex-col bg-white w-full rounded-3xl py-6 px-2 text-center">
      <div className="mb-auto flex items-center justify-between px-6">
        <div>
          <h2 className="text-lg font-bold text-navy-700 dark:text-white">
            Ingresos por Proyectos
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Últimas 3 Semanas
          </p>
        </div>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="mb-auto flex items-center gap-3 px-6 py-3">
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-brand-500" />
          <span className="ml-2 text-sm font-medium text-gray-600">Desarrollo Frontend</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-[#6AD2FF]" />
          <span className="ml-2 text-sm font-medium text-gray-600">Desarrollo Backend</span>
        </div>
        <div className="flex items-center">
          <div className="h-3 w-3 rounded-full bg-[#EFF4FB]" />
          <span className="ml-2 text-sm font-medium text-gray-600">Consultoría</span>
        </div>
      </div>

      <div className="md:mt-16 lg:mt-0">
        <div className="h-[250px] w-full xl:h-[350px]">
          <BarChart
            chartData={barChartDataWeeklyRevenue}
            chartOptions={barChartOptionsWeeklyRevenue}
          />
        </div>
      </div>

      <div className="flex justify-between px-6 pt-4">
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">Ingreso Total</span>
          <span className="text-2xl font-bold text-navy-700 dark:text-white">L. 87,500</span>
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-600">Promedio Semanal</span>
          <span className="text-2xl font-bold text-navy-700 dark:text-white">L. 29,167</span>
        </div>
      </div>
    </Card>
  );
};

export default WeeklyRevenue;
