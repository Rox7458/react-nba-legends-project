
import "./App.scss";
import Header from "./components/header/Header";
import { data } from "./helper/data";
import CardContainer from "./components/players/CardContainer";

const App = () => {
  return (
    <div>
      <Header />
      <CardContainer data={data} />
    </div>
  );
};

export default App;
