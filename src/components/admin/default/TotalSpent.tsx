import {
  MdArrowDropUp,
  MdOutlineCalendarToday,
  MdBarChart,
} from "react-icons/md";
import Card from "components/card";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
} from "variables/charts";
import LineChart from "components/charts/LineChart";

const TotalSpent = () => {
  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <button className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80">
          <MdOutlineCalendarToday />
          <span className="text-sm font-medium text-gray-600">Último Semestre</span>
        </button>
        <button className="!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdBarChart className="h-6 w-6" />
        </button>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <p className="mt-[20px] text-3xl font-bold text-navy-700 dark:text-white">
            L. 975,500
          </p>
          <div className="flex flex-col items-start">
            <p className="mt-2 text-sm text-gray-600">Inversión en Desarrollo</p>
            <div className="flex flex-row items-center justify-center">
              <MdArrowDropUp className="font-medium text-green-500" />
              <p className="text-sm font-bold text-green-500"> +18.2% </p>
            </div>
          </div>
        </div>
        <div className="h-full w-full">
          <LineChart
            chartOptions={lineChartOptionsTotalSpent}
            chartData={lineChartDataTotalSpent}
          />
        </div>
      </div>

      <div className="mt-4 flex justify-between px-4 md:px-8">
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-600">Backend</p>
          <p className="mt-1 text-xl font-bold text-navy-700 dark:text-white">
            L. 425,300
          </p>
          <span className="text-sm text-green-500">+12.4%</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-600">Frontend</p>
          <p className="mt-1 text-xl font-bold text-navy-700 dark:text-white">
            L. 325,800
          </p>
          <span className="text-sm text-green-500">+8.7%</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-600">DevOps</p>
          <p className="mt-1 text-xl font-bold text-navy-700 dark:text-white">
            L. 224,400
          </p>
          <span className="text-sm text-green-500">+5.2%</span>
        </div>
      </div>
    </Card>
  );
};

export default TotalSpent;
