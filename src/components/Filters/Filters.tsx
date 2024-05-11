import { useState } from "react";
import { dynamicReturn } from "../../utils/dynamicReturn";
import { FiltersProps } from "../../types/filters.type";
import { JdCard } from "../Card/JdCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/reducers/jdSlice";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Filters = ({ config }: FiltersProps) => {
  const [selectedFilterData, setSelectedFilterData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnChange = (key: any, value: any) => {
    setSelectedFilterData((prevData) => ({ ...prevData, [key]: value }));
    setSearchParams((prevSearchParams) => {
      const newSearchParams = new URLSearchParams(prevSearchParams);
      newSearchParams.set(key, value);
      return newSearchParams;
    });
  };

  const dispatch = useDispatch();
  const { jdList } = useSelector((state) => state.jobDetails);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    if (jdList) {
      // gets already set params
      const params = Object.fromEntries(searchParams.entries());
      setSelectedFilterData(params);
    }
  }, [searchParams, jdList]);

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

      <div className="">
        {jdList?.map((ele) => (
          <div className="" key={ele.jdUid}>
            <JdCard />
          </div>
        ))}
      </div>
    </div>
  );
};
