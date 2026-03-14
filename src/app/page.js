import Header from "./components/header";
import Time from "./components/Time";
import Forecast from "./components/forecast";
import Hourly from "./components/hourly";
export default function Home() {
  return (
    <div className="p-5 flex flex-col gap-9">
    <Header/>
    <Time/>
    <Forecast/>
    <Hourly/>
    </div>
  );
}
