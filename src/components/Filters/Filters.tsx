import { useState, useEffect } from "react";
import { dynamicReturn } from "../../utils/dynamicReturn";
// import { FiltersProps } from "../../types/filters.type";
import { JdCard } from "../Card/JdCard";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getFilteredData } from "../../utils/getFilteredData";
import { fetchData } from "../../redux/reducers/jdSlice";
import "./filter.css";
import { Button } from "@mui/material";
import { RootState } from "../../redux/store";

export const Filters = ({ config }: any) => {
  const dispatch = useDispatch();
  const { loading, jdList, nextUrl } = useSelector(
    (state: RootState) => state.jobDetails
  );

  const [sampleJdList, setSampleJdList] = useState<any>([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (jdList) {
      setSampleJdList(jdList);
    }
  }, [jdList]);

  useEffect(() => {
    if (jdList) {
      // gets already set params
      const params = Object.fromEntries(searchParams.entries());
      setSelectedFilterData(params);

      // gets filters data
      setSampleJdList(getFilteredData(params, jdList));
    }
  }, [searchParams, jdList]);

  //selected filter state
  const [selectedFilterData, setSelectedFilterData] = useState({});

  // filter select handler
  const handleOnChange = (key: any, value: any) => {
    setSelectedFilterData((prevData) => ({ ...prevData, [key]: value }));

    // set params
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      if (key !== "remote") {
        newSearchParams.set(key, value);
      }
      return newSearchParams;
    });
  };

  return (
    <div className="filter-main">
      <div className="filter-container">
        {config.map((filter: any) => (
          <div className="filter" key={filter.name}>
            {dynamicReturn({ filter, handleOnChange, selectedFilterData })}
          </div>
        ))}
      </div>
      {loading ? (
        "loading..."
      ) : (
        <>
          <div className="card-container">
            {sampleJdList?.map((ele: any) => (
              <div className="" key={ele.jdUid} style={{ display: "flex" }}>
                <JdCard data={ele} />
              </div>
            ))}
          </div>
          <div className="load-more-container">
            <Button
              onClick={() => {
                //@ts-ignore
                dispatch(fetchData(nextUrl));
              }}
              variant="contained"
            >
              Load more
            </Button>
          </div>
        </>
      )}
    </div>
  );
};
