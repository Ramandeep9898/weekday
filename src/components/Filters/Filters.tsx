import React, { useState, useEffect } from "react";
import { dynamicReturn } from "../../utils/dynamicReturn";
import { FiltersProps } from "../../types/filters.type";
import { JdCard } from "../Card/JdCard";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getFilteredData } from "../../utils/getFilteredData";
import { fetchData } from "../../redux/reducers/jdSlice";

export const Filters = ({ config }: FiltersProps) => {
  const dispatch = useDispatch();
  const { loading, jdList, totalCount } = useSelector(
    (state) => state.jobDetails
  );

  const [sampleJdList, setSampleJdList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
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
      newSearchParams.set(key, value);
      return newSearchParams;
    });
  };

  return (
    <div className="">
      <div
        className=""
        style={{ display: "flex", alignItems: "center", gap: "20px" }}
      >
        {config.map((filter) => (
          <div className="" key={filter.name} style={{ width: "100%" }}>
            {dynamicReturn({ filter, handleOnChange, selectedFilterData })}
          </div>
        ))}
      </div>
      <div className="" style={{ width: "100%" }}>
        {sampleJdList?.map((ele, idx) => (
          <div className="" key={idx} style={{ display: "flex" }}>
            <JdCard data={ele} />
          </div>
        ))}
      </div>
    </div>
  );
};
