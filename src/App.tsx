import { useEffect } from "react";

import { Filters } from "./components/Filters/Filters";
import { FILTER_CONFIG } from "./config/filter.config";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./redux/reducers/jdSlice";

function App() {
  const dispatch = useDispatch();
  const { loading, jdList, totalCount } = useSelector(
    (state) => state.jobDetails
  );
  // console.log();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Filters config={FILTER_CONFIG} />
    </>
  );
}

export default App;
