import TextField from "@mui/material/TextField";
import { useSearchParams } from "react-router-dom";

export const SearchInput = ({
  filter,
  handleOnChange,
  selectedFilterData,
}: {
  filter: any;
  handleOnChange: any;
  selectedFilterData: any;
}) => {
  const [searchParams, _] = useSearchParams();

  return (
    <TextField
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
      value={
        searchParams.get(filter.name) || selectedFilterData[filter.name] || ""
      }
      name={filter.name || ""}
      onChange={(e) => handleOnChange(e.target.name, e.target.value)}
    />
  );
};
