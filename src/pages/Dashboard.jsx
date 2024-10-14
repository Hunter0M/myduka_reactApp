import LineChartComponent from "../components/TestLineChart";
// import { LineChart } from "recharts";
import BasicBars from "../components/Barchart";

const DashBoard = () => {
  function GridItem({ title, children }) {
    return (
      <div className=" grid grid-cols-1 gap-4  items-center justify-center p-4 border-gray-400 xl:g rounded-xl h-[400px] ">
        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
        {children}
      </div>
    );
  }
  return (
    <div>
      <h5>DashBoard</h5>
      <h2>BarChart</h2>
      <GridItem title="Line Chart">
        <BasicBars  />
      </GridItem>
      <h2>LineChart</h2>
      

      <GridItem title="Line Chart">
        <LineChartComponent />
      </GridItem>
    </div>
  );
};
export default DashBoard;
