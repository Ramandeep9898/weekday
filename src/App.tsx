import { Filters } from "./components/Filters/Filters";
import { FILTER_CONFIG } from "./config/filter.config";

function App() {
  return (
    <>
      <Filters config={FILTER_CONFIG} />
    </>
  );
}

export default App;
