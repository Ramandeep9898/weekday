import { useState } from "react";
import { dynamicReturn } from "../../utils/dynamicReturn";
import { FiltersProps } from "../../types/filters.type";

export const Filters = ({ config }: FiltersProps) => {
  const [selectedFilterData, setSelectedFilterData] = useState({});

  const handleOnChange = (key: any, value: any) => {
    setSelectedFilterData((prevData) => ({ ...prevData, [key]: value }));
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
    </div>
  );
};
